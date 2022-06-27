import React from 'react'
import { useState } from 'react'
import Card from '../Card/CarCards/Card'
import { useCard } from '../hooks/useCard'
import cls from './Cars.module.scss'
import { marks } from '../utils/Marks'
import SortSide from '../Sort/SortSide'

const Carss = () => {

  const { base } = useCard()
  const [mark, setMark] = useState('')

  const [error, setError] = useState('')

  const [database, setDatabase] = React.useState(null)
  const [sortValue, setSortValue] = React.useState('Все')
  const [sortText, setSortText] = React.useState('Все')
  const [sideActive, setSideActive] = React.useState(false)
  const [category, setCategory] = React.useState(null)

  React.useEffect(() => {
    console.log(category);
    const result = base && base.filter(item => {
      if (item.title === category) {
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
    <div style={{ 'display': 'flex', "justifyContent": 'center', "flexDirection": "column", "alignItems": 'center' }}>
      <div className={cls.filter}>
        <div className={cls.filtration}>
          <div className={cls.container}>
            {
              marks.map(({ id, title, path }) => (
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
          <div className={cls.sort}>
            <p>Сортировка:
              <span
                onClick={() => setSideActive(!sideActive)}
              >
                {sortText}
              </span>
            </p>
            <SortSide
              sideActive={sideActive}
              setSideActive={setSideActive}
              setSortValue={setSortValue}
              setSortText={setSortText}
            />
          </div>
        </div>
        <div className={cls.filterForm}>
          <input
            type="text"
            placeholder='Марка машины...'
            onChange={e => setMark(e.target.value)}
          />
        </div>
      </div>
      <div className={cls.filter_block}>
        {
          <Card
            base={base}
            filteredBase={filteredCars}
            filteredWithMark={database}
            error={error}
            sortValue={sortValue}
          />
        }
      </div>
    </div>
  )

}

export default Carss