import React from 'react'
import { Link } from 'react-router-dom';
import { CarBase } from '../utils/CarBase/CarBase'
import cls from './Cards.module.scss'

const FilteredCars = ({searchBase}) => {
  let base = searchBase && CarBase.filter(item => 
    item.title.includes(searchBase.mark)
    && item.type.includes(searchBase.type) 
    && item.price.includes(searchBase.priceTo) 
    ?
    item : searchBase.type === 'Все' 
    && item.title.includes(searchBase.mark)
    && item.price.includes(searchBase.priceTo)
    ?
    item : ''
  )

  console.log(searchBase);
  return (
    <div>
      <div className={cls.card_container}>
      {
        base && base.map(({id, title, url, price }) => (
            <div className={cls.cars_card}>
              <div className={cls.card_image}>
                <img 
                  src={url} 
                  alt={title}
                  />
              </div>
              <div className={cls.card_body}>
                <h2>{title}</h2>
                <div className={cls.card_price}>
                  <h4>Цена:</h4>
                  <p>
                    {price}$
                    <span> / в сутки</span>
                  </p>
                </div>
              </div>
              <div className={cls.card_footer}>
                <Link className={cls.card_footer_btn} to={`/carsmore/${id}`}>Подробнее</Link>
              </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}
export default FilteredCars