import React from 'react'
import SortSide from './SortSide'
import cls from './Sort.module.scss'
import Card from '../Card/CarCards/Card'
import CategoryBtn from '../CategoryButtons/CategoryBtn'

const Sort = () => { 
  const [ sortValue, setSortValue ] = React.useState('Все')
  const [ sideActive, setSideActive ] = React.useState(false)

  return (
    <div className={cls.filter}>
      <div className={cls.filtration}>
        <CategoryBtn />
        <div className={cls.sort}>
          <p>Сортировка: 
            <span onClick={() => setSideActive(!sideActive)}>
              {sortValue ? sortValue : setSortValue('Все')}
            </span>
          </p>
          <SortSide 
            sideActive={sideActive} 
            setSideActive={setSideActive}
            setSortValue={setSortValue}
          />
        </div>
      </div>
      <Card />
    </div>
  )
}

export default Sort