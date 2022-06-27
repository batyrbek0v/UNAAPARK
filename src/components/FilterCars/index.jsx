import React from 'react'
import { useState } from 'react'
import Card from '../Card/CarCards/Card'
import { useCard } from '../hooks/useCard'
import cls from './Cars.module.scss'
import { marks } from '../utils/Marks'

const Carss = () => {

  const { base } = useCard()
  const [mark, setMark] = useState('')


  const [ database, setDatabase ] = React.useState(null)
  const [ category, setCategory ] = React.useState(null)
  
  React.useEffect(() => {
    console.log(category);
      const result = base && base.filter(item => {
        if(item.title === category){
          return item
        }
      })

      setDatabase(result)
      console.log(result);
    }, [category])

  const filteredCars = base?.filter(car => {
    return car.title.toLowerCase().includes(mark.toLocaleLowerCase()) 
  })

  return (
    <div className={cls.filterToCenter}>
      <div className={cls.filter}>
        {/* <div className={cls.filtration}>
          <div className={cls.container}>
                {
                  marks.map(({id, title, path }) => (
                    <button
                      className={cls.btn}
                      key={id}
                      onClick={() => {
                        setCategory(path)
                      }}
                      >
                        {title}
                    </button>
                  ))
                }
            </div>
        </div> */}
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
          <Card 
            base={base} 
            filteredCars={filteredCars} 
            filteredWithMark={database} 
          />
        }
      </div>
    </div>
  )

}

export default Carss