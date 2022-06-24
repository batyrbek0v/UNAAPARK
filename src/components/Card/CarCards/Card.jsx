import React from 'react'
import { Link } from 'react-router-dom'
import CategoryBtn from '../../CategoryButtons/CategoryBtn'
import notImage from '../../images/notCar.png'
import './Card.scss'
import Loader from '../../Loader'
import { API, getSavedCars, toBase } from '../../../configs/api'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../../../providers/useAuth'

import Alert, { modalAlert } from '../../Alerts'


const Card = () => {
	const { users } = useAuth()


	const {cards} = useAuth()
	const [carBase, setCarBase] = React.useState()
	// const [ newCarBase, setNewCarBase ] = React.useState()

	React.useEffect(() => {
		API.get()
			.then(res => {
				const baseWithID = Object.entries(res.data)
					.map(item => {
						const id = item[0]
						return {
							...item[1],
							id
						}
					})
				setCarBase(baseWithID)
			})
	}, [carBase])

	console.log(carBase);

	const handleFavorite = (id) => {
		const favoriteCar = carBase && carBase.find(item => item.id === id)
		if(!favoriteCar) {
			modalAlert.isSaved('Эту машину вы уже добавили !', 'error',)
			console.log('error');

		}else{
			console.log('error');
		}
		if (users) {
			toBase.post(users.id, favoriteCar)
			modalAlert.isSaved('Успешно добавлено !', 'success',)
		} else {
			modalAlert.notSaved(
				'Не добавлено !',
				'Чтобы можно было добавлять, вам нужно авторизоваться',
				'error',
				'<a href="/auth/login" style="text-decoration:none; color:white;" >Авторизоваться</a>',
			)
		}

	}

	if (!carBase) return <Loader />

	return (
		<>
			{/* <CategoryBtn />+ */}
			<div className='card_container'>
				{
					carBase && carBase.map(({ id, model, title, year, photo, price }) => (
						<div to={`/carsmore/${id}`} className="cars_card" key={id}>
							<div className="card_body">
								<div className="card_img">
									<Link to={`/carsmore/${id}`}>
										<img src={photo ? photo : notImage} alt={title} />
									</Link>
								</div>
								<div className='card_title'>
									<h1>{title}</h1>
									<h2>{model}</h2>
									<h4>{year}</h4>
									<h4>{price} $ в сутки</h4>
									<button
										className='favorites_btn1'
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
