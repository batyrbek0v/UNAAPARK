import React from 'react'
import FilteredCars from '../FilteredCars'
import { CategoryOfCar } from '../utils/Category/Category'
import cls from './CategoryBtn.module.scss'


// getProduct().map(item => <Card key={item.id} base={item} type={item.status} />)
// console.log(route)



const CategoryBtn = () => {

    const [ category , setCategory ] = React.useState('All')

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

            <FilteredCars category={category} />
        </>
    )
}

export default CategoryBtn
