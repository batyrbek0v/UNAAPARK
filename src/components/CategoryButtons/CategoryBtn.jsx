import React from 'react'
import Card from '../Card/CarCards/Card'
import { marks } from '../utils/Marks'
import cls from './CategoryBtn.module.scss'


const CategoryBtn = () => {

    const [ category , setCategory ] = React.useState()

    return (
        <>
            <div className={cls.container}>
                {
                    marks.map(({id, title, path }) => (
                        <button
                            className={cls.btn}
                            key={id}
                            onClick={() => {
                                setCategory(path.toUpperCase())
                            }}
                        >
                            {title}
                        </button>
                    ))
                }
            </div>

        </>
    )
}

export default CategoryBtn
