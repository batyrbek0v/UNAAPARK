import React from 'react'
import { Message } from '../../configs/api'
import { CategoryOfCar } from '../utils/Category/Category'
import cls from './CategoryBtn.module.scss'


// getProduct().map(item => <Card key={item.id} base={item} type={item.status} />)
// console.log(route)



const CategoryBtn = () => {

    const [ category , setCategory ] = React.useState('All')

    localStorage.setItem('route' , category)

    return (
        <>
            <div className={cls.container}>
                {
                    CategoryOfCar.map(({ title, route }, index) => (
                        <button
                            className={cls.btn}
                            key={index}
                            onClick={() => {
                                setCategory(route)
                            }}
                        >
                            {title}
                        </button>
                    ))
                }
                <select>
                    {
                        CategoryOfCar.map(({ title, route }, index) => (
                            <option
                                key={index}
                                value={route}
                                // onClick={() => navigate(`/cars/${route}`)}
                                >
                                {title}
                            </option>
                        ))
                    }
                </select>

            </div>
        </>
    )
}

export default CategoryBtn
