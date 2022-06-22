import React from 'react'
import { getSavedCars, removeSavedCar } from '../../configs/api'
import { useAuth } from '../../providers/useAuth'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import notImage from '../../components/images/notCar.png'
import Loader from '../../components/Loader'

const Favorites = () => {
	const [base, setBase] = React.useState()
	const { users } = useAuth()


	React.useEffect(() => {
		getSavedCars(users && users.id)
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
	}, [users])

	const handleRemoveCar = (id) => {
		removeSavedCar(users.id, id)
		console.log(id)
	}


	if (base == null) return <h3>Вы еще ничего не сохраняли 😃</h3>

	if (!base) return <Loader />
	return (
		<div className='savedCars'>
			<h1>Ваши сохраненные машины</h1>
			<div className='card_container'>
				{
					base && base.map(({ id, title, photo, price }) => (
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
	)
}

export default Favorites