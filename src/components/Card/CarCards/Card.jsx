import React from 'react'
import { Link } from 'react-router-dom'
import notImage from '../../images/notCar.png'
import './Card.scss'
import Loader from '../../Loader'
import { API, toBase } from '../../../configs/api'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../../../providers/useAuth'

import { modalAlert } from '../../Alerts'


const Card = ({category}) => {
	const { users } = useAuth()
	const [ carBase, setCarBase ] = React.useState()

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

	const handleFavorite = (id) => {
		console.log(id);
		const favoriteCar = carBase && carBase.find(item => item.id === id)

		if(users){
			toBase.post(users.id, favoriteCar)
			toBase.isSaved(users.id, id, true)
			modalAlert.isSaved()
		}else{
			modalAlert.notSaved()
		}
	}

	if (!carBase) return <Loader />

	// const base = carBase && carBase.filter(item => item && item.title.includes(mark))
	
	return (
		<>
			<div className='card_container'>
				{
					carBase && carBase.map(({ id, title, photo, price, isSaved  }) => (
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
										className='favorites_btn1'
										disabled={isSaved ? true : false}
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
