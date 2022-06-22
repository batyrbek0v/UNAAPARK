import React from 'react'
import { getSavedCars, removeSavedCar } from '../../configs/api'
import { useAuth } from '../../providers/useAuth'
import { MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import notImage from '../../components/images/notCar.png'
import './Card.scss'
import cls from './Favorites.module.scss'
import { BsArrowLeftShort } from 'react-icons/bs'



const Favorites = () => {
	const [base, setBase] = React.useState(null)
	const { users } = useAuth()

	const navigate = useNavigate()

	React.useEffect(() => {
		getSavedCars(users && users.id)
			.then(res => {
				if(res.data){
					const baseWithID = Object.entries(res.data)
					.map(item => {
						const id = item[0]
						return  {
							...item[1],
							id
						}
					})
					setBase(baseWithID)
				}
			})
	}, [base])


	const handleRemoveCar = (id) => {
		removeSavedCar(users.id, id)
	}

	return (
		<React.Fragment>
			{
				base ? <div className={cls.savedCars}>
					<h1>Ваши сохраненные машины</h1>
					<div className='card_container'>
						{
							base && base.map(({ id, title, photo, price } , index) => (
								<div to={`/carsmore/${id}`} className="cars_card" key={id}>
									<div className="card_body">
										<div className="card_img">
											<img src={photo ? photo : notImage} alt={title} />
										</div>
										<div className='card_title'>
											<h4>{title}</h4>
											<h4>2015</h4>
											<h4>{price} $ в сутки</h4>
										</div>
										<button
											className='favorites_btn'
											onClick={e => {
												e.preventDefault()
												handleRemoveCar(id)
											}}
										>
											<MdClose />
										</button>
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
				</div> 
					: 
				<div className={cls.savesIsHavent}>
					<h3>
						Закладок нет!
					</h3>
					<p>Вероятнее всего, вы ничего не добавляли в закладки</p>

					<button onClick={() => navigate('/cars')}>
						<BsArrowLeftShort />
						Вернуться назад
					</button>
				</div>
			}
		</React.Fragment>
	)
}

export default Favorites