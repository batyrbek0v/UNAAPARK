import React from 'react'
import { Link } from 'react-router-dom'
import CategoryBtn from '../../CategoryButtons/CategoryBtn'
// import { CarBase } from '../utils/CarBase/CarBase'
import notImage from '../../images/notCar.png'
import './Card.scss'
import Loader from '../../Loader'
import { API, toBase } from '../../../configs/api'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../../../providers/useAuth'

const Card = () => {
	const { users } = useAuth()
	const [ carBase, setCarBase ] = React.useState()
	const [ base, setBase ] = React.useState(null)

	React.useEffect(() => {
		API.get()
			.then(res => {
				const result = Object
					.entries(res.data && res.data)
					.map
					(([key, value]) => {
						return {
							id: key,
							...value
						}
					})

				setCarBase(result)
			})
	}, [base])




	const handleFavorite = (id) => {
		const favoriteCar = carBase && carBase.find(item => item.id === id)

		toBase.post(users && users.id, favoriteCar)
		toBase.post(users && users.id, id, true)
	}

	console.log(base);

	if (!carBase) return <Loader />

	return (
		<>
			{/* <CategoryBtn />+ */}
			<div className='card_container'>
				{
					carBase && carBase.map(({ id, title, photo, price }) => (
						<div to={`/carsmore/${id}`} className="cars_card" key={id}>

							<div className="card_body">
								<div className="card_img">
									<Link to={`/carsmore/${id}`}>
										<img src={photo ? photo : notImage} alt={title} />
									</Link>
								</div>
								<div className='card_title'>
									<h4>{title}</h4>
									<h4>2015</h4>
									<h4>{price} $ в сутки</h4>
									<button
										className='favorites_btn'
										onClick={() => {
											handleFavorite(id)
										}}
									>
										<BsBookmark />
									</button>
								</div>
							</div>
							<div className="card_footer">
								<Link className='card_footer_btn' to={`/carsmore/${id}`}>Детали</Link>
								<button
									className='card_footer_btn'
									onClick={() => {
										window.open('https://t.me/sattarzanov')
									}}
								>
									Забронировать
								</button>
							</div>
						</div>
					)).reverse()
				}
			</div>
		</>
	)
}


export default Card
