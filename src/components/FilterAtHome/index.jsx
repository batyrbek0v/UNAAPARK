import React from 'react'
import FilteredCars from '../FilteredCars'
import cls from './filterAtHome.module.scss'

const FilterAtHome = () => {
  const [ searchbase, setSearchBase ] = React.useState(null)
  const [ mark, setMark ] = React.useState('')
  const [ type, setType ] = React.useState('')
  const [ priceTo, setPriceTo ] = React.useState('')

  const searchBase = () => {
    setSearchBase({
      mark: mark.toUpperCase(),
      type: type,
      priceTo: priceTo.toString(),
    })
  }


  return (
    <div style={{'display':'flex', "justifyContent":'center', "flexDirection":"column", "alignItems":'center'}}>
      <div className={cls.filter}>
        <div className={cls.content}>
          <div className={cls.title}>
            <h1>Поиск машины:</h1>
          </div>
          <div className={cls.filterForm}>
            <div>
              <input 
                type="text" 
                placeholder='Марка машины'  
                onChange={e => setMark(e.target.value)}/>
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
              <input 
                type="text" 
                placeholder='Цена до' 
                onChange={e => setPriceTo(e.target.value)}/>
            </div>
            <button onClick={e => {
              e.preventDefault()

              searchBase()
            }}>Поиск</button>
          </div>
        </div>
      </div>
      <h1>Все автомобили</h1>
      <FilteredCars
        searchBase={searchbase}
      />
    </div>
  )
}

export default FilterAtHome