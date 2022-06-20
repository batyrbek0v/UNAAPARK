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
import UsersInfo from '../Support/Chat/usersInfo'

const Card = () => {


	
	const [carBase, setCarBase] = React.useState()
	const [ base, setBase ] = React.useState(null)

	React.useEffect(() => {
		API.get()
			.then(res => {
				const result = Object
				.entries(res.data)
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



	const { users } = useAuth()

	const handleFavorite = (id) => {
 
		const favoriteCar = carBase && carBase.find(item => item.id === id)

		toBase.get(users.id)
			.then(res => {
				const result = Object.entries(res.data)
					.map(([key, value]) => {
						return {
							id: key, 
							...value
						}
					})

				setBase(result)
			})
		
		console.log(base);

		// base && base.find(item => item.id === id ? alert('Эта машина была добавлена!') : toBase.post(users.id, favoriteCar))
		toBase.post(users.id, favoriteCar)

	}


	if (!carBase) return <Loader />

	return (
		<>
			<CategoryBtn />
			<div className='card_container'>
				{
					carBase && carBase.map(({ id,title, photo, price }) => (
						<div className="cars_card" key={id}>
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
								<Link className='card_footer_btn' to={`/carsmore/${id}`}>Подробнее</Link>
								<button className='favorites_btn'
									onClick={() => {
										handleFavorite(id)
										toBase.get(users.id)
									}}
								> <BsBookmark /> </button>
							</div>
						</div>
					)).reverse()
				}
			</div>

		</>
	)
}

export default Card
