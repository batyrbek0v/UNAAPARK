import React from 'react'
import { Link } from 'react-router-dom'
import loader from './../images/loader.gif'
import cls from './Card.module.scss'

const CardHome = ({ base }) => {
	if (!base) return (
		<div>
			<img
				src={loader}
				alt="Loading..." />
		</div>
	)
	return (
		<>
			<div className={cls.card_container}>
				{
					base.length === 0 ? <h1 style={{"fontSize":'18px', "color":'red'}}>Ничего не найдено!</h1> : base.map(({ title, url, price, id }) => (
						<div className="cars_card" key={id}>
							<div className="card_image">
								<img src={url} alt={title} />
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
							</div>
						</div>
					))
				}
			</div>

		</>
	)
}

export default CardHome
