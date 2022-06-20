import React from 'react'
import { API } from '../../configs/api'
import cls from './ads.module.scss'


const Send_Ads = () => {
  const [base, setBase] = React.useState(null)
  const [mark, setMark] = React.useState('')
  const [photo, setPhoto] = React.useState('')
  const [transmission, setTransmission] = React.useState('')
  const [type, setType] = React.useState('')
  const [fuel, setFuel] = React.useState('')
  const [color, setColor] = React.useState('')
  const [gas, setGas] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [price, setPrice] = React.useState('')

  const send = () => {
    setBase({
      title: mark,
      photo: photo,
      transmission: transmission,
      type: type,
      fuel: fuel,
      color: color,
      gas: gas,
      category: category,
      price: price,
    })

    API.post(base)
  }


  return (
    <>
      <div className={cls.sendAds}>
        <div className={cls.ads}>
          <h1>Подать объявление</h1>
          <div>
            <input type="text" placeholder='Марка машины' onChange={e => setMark(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Фото машины' onChange={e => setPhoto(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Коробка передачи' onChange={e => setTransmission(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Объем двигателя' onChange={e => setFuel(e.target.value)} />
          </div>
          <div>
            <select onChange={e => setType(e.target.value)}>
              <option selected disabled>Кузов</option>
              <option value="Все">Все</option>
              <option value="Седан">Седан</option>
              <option value="Внедорожник">Внедорожник</option>
              <option value="Купе">Купе</option>
              <option value="Универсал">Универсал</option>
              <option value="Хэтчбек">Хэтчбек</option>
              <option value="Кабриолет">Кабриолет</option>
              <option value="Пикап">Пикап</option>
              <option value="Лимузин">Лимузин</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Цвет машины" onChange={e => setColor(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder="Тип топлива" onChange={e => setGas(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder="Категория" onChange={e => setCategory(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Цена' onChange={e => setPrice(e.target.value)} />
          </div>
          <button onClick={() => {
            send()

          }}>Добавить</button>
        </div>
      </div>
    </>
  )
}

export default Send_Ads

