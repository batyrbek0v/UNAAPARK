import React from 'react'
import { Link } from 'react-router-dom'
import CategoryBtn from '../CategoryButtons/CategoryBtn'
// import { CarBase } from '../utils/CarBase/CarBase'
import notImage from '../images/notCar.png'
import './Card.scss'
import Loader from '../Loader'
import { API, toBase } from '../../configs/api'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../../providers/useAuth'

const Card = () => {


	const { users } = useAuth()

	const [carBase, setCarBase] = React.useState()
	const [base, setBase] = React.useState(null)

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
	}, [])




	const handleFavorite = (id) => {
		const favoriteCar = carBase && carBase.find(item => item.id === id)

		toBase.post(users.id, favoriteCar)
	}

	console.log(base);

	if (!carBase) return <Loader />

	return (
		<>
			<CategoryBtn />
			<div className='card_container'>
				{
					carBase && carBase.map(({ id, title, photo, price }) => (
						<div className="cars_card" key={id}>
							<button
								className='favorites_btn'
								onClick={() => {
									handleFavorite(id)
								}}
							>
								<BsBookmark />
							</button>
							<div className="card_image">
								<img src={photo ? photo : notImage} alt={title} />
							</div>
							<div className="card_body">
								<h2>{title}</h2>
								<div className="card_price">
									<h4>Цена:</h4>
									<p>
										{price}$
										<span> / в сутки</span>
									</p>
								</div>
							</div>
							<div className="card_footer">
								<Link 
									className='card_footer_btn' 
									to={`/carsmore/${id}`}
									onClick={() => {
										localStorage.setItem('idOfCar', id)
									}}
								>Подробнее</Link>
							</div>
						</div>
					)).reverse()
				}
			</div>
		</>
	)
}


export default Card
