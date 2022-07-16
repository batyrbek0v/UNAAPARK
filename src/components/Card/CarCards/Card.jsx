import React from 'react'
import { Link } from 'react-router-dom'
import notImage from '../../images/notCar.png'
import Loader from '../../Loader'
import { API, toBase } from '../../../configs/api'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../../../providers/useAuth'
import errorSound from '../../sound/error.mp3'
import successSound from '../../sound/success.mp3'
import './Card.scss'

import { modalAlert } from '../../Alerts'


const Card = ({ base }) => {
	const { users } = useAuth()

	const error = new Audio(errorSound)
	const success = new Audio(successSound)


	const handleFavorite = (id) => {

		const favoriteCar = base && base.find(item => item.id === id)

		if (users) {
			toBase.put(users.id, favoriteCar, id)

			modalAlert.isSaved('Успешно добавлено !', 'success',)
			success.play()
		} else {
			modalAlert.notSaved(
				'Не добавлено !',
				'Чтобы можно было добавлять, вам нужно авторизоваться',
				'error',
				'<a href="/auth/login" style="text-decoration:none; color:white;" >Авторизоваться</a>',
			)
			error.play()
		}

	}

	if (!base) return <Loader />

	return (
		<>
			<div className='card_container'>
				{
					base.length > 0
						? base.map(({ id, model, title, year, photo, price, isBroned }) => (
							<div to={`/carsmore/${id}`} className="cars_card" key={id}>
								<div className="card_body">
									<div className="card_img">
										<Link to={`/carsmore/${id}`}>
											<img src={photo.url ? photo.url : notImage} alt={title} />
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
										style={
											isBroned
											?
											{
												background: 'red',
												opacity: '0.5'
											}
											:
											{
												opacity: '1'
											}
										}
										disabled={isBroned ? true : false}
									>
										{isBroned ? 'Забронирован' : 'Забронировать'}
									</button>
								</div>
							</div>
						))
						: base.length < 0 ? <h1>Ничего не найдено!</h1> : <h1>Ничего не найдено!</h1>
				}
			</div>
		</>
	)
}


export default Card
