import React from 'react'
import { useState } from 'react'
import Card from '../Card/CarCards/Card'
import { useCard } from '../hooks/useCard'
import cls from './Cars.module.scss'

const Carss = () => {

  const { base } = useCard()
  const [mark, setMark] = useState('')

  const [error , setError] = useState('')

  const filteredCars = base?.filter(car => {
    return car ? car.title.toLowerCase().includes(mark.toLocaleLowerCase()) : setError('No result')
  })

  return (
    <div style={{ 'display': 'flex', "justifyContent": 'center', "flexDirection": "column", "alignItems": 'center' }}>
      <div className={cls.filter}>
        <div className={cls.filterForm}>
          <input
            type="text"
            placeholder='Марка машины...'
            onChange={e => setMark(e.target.value)}
          />
          {/* <div>
              <select onChange={e => setType(e.target.value)}>
                <option selected disabled>Кузов</option>
                <option mark="Все">Все</option>
                <option mark="Седан">Седан</option>
                <option mark="Внедорожник">Внедорожник</option>
                <option mark="Купе">Купе</option>
                <option mark="Универсал">Универсал</option>
                <option mark="Хэтчбек">Хэтчбек</option>
                <option mark="Кабриолет">Кабриолет</option>
                <option mark="Пикап">Пикап</option>
                <option mark="Лимузин">Лимузин</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder='Цена до'
                onChange={e => setMark(e.target.value)} />
            </div> */}
        </div>
      </div>
      <div className={cls.filter_block}>
        {
          <Card base={filteredCars} error={error}/>
        }
      </div>
    </div>
  )

}

export default Carss