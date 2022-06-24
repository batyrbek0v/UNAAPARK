import React from 'react'
import { API } from '../../configs/api'
import cls from './ads.module.scss'


const Send_Ads = () => {
  const [base, setBase] = React.useState(null)

  const [brand, setBrand] = React.useState('')
  const [model, setModel] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [photo, setPhoto] = React.useState('')
  const [year, setYear] = React.useState('')
  const [transmission, setTransmission] = React.useState('')
  const [type, setType] = React.useState('')
  const [fuel, setFuel] = React.useState('')
  const [color, setColor] = React.useState('')
  const [gas, setGas] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [price, setPrice] = React.useState('')

  const send = () => {
    setBase({
      title,
      model,
      year,
      photo,
      transmission,
      type,
      fuel,
      color,
      gas,
      category,
      price,
    })

    API.post(base)
  }


  return (
    <>
      <div className={cls.sendAds}>
        <div className={cls.ads}>
          <h1>Подать объявление</h1>
          <div>
            <input type="text" placeholder='Maрка машины' onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Модель машины' onChange={e => setModel(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Год выпуска' onChange={e => setYear(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Фото машины' onChange={e => setPhoto(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder="Цвет машины" onChange={e => setColor(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Коробка передачи' onChange={e => setTransmission(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Объем двигателя' onChange={e => setFuel(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='Цена' onChange={e => setPrice(e.target.value)} />
          </div>
          <div>
            <select onChange={e => setGas(e.target.value)}>
              <option selected disabled>Тип топлива</option>
              <option value="Бензин">Бензин</option>
              <option value="Дизель">Дизель</option>
              <option value="Газ">Газ</option>
              <option value="Электро">Электро</option>
            </select>
          </div>
          <div>
            <select onChange={e => setType(e.target.value)}>
              <option selected disabled>Кузов</option>
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
            <select onChange={e => setCategory(e.target.value)}>
              <option selected disabled>Категория</option>
              <option value="Econom">Econom</option>
              <option value="Businnes">Businnes</option>
              <option value="VIP">VIP</option>
              <option value="Premuim">Premuim</option>
            </select>
          </div>
          <button onClick={e => {
            e.preventDefault()
            send()

          }}
          >
            Добавить
          </button>
        </div>
      </div>
    </>
  )
}

export default Send_Ads

