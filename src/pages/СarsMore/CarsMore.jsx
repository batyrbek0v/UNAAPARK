import React from 'react'
import cls from './CarsMore.module.scss'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from 'react-icons/io5'
import { API } from '../../configs/api'
import Loader from '../../components/Loader'
import notCar from '../../components/images/notCar.png'


const CarsMore = () => {
    const { id } = useParams()

    const [base, setBase] = React.useState(null)
    const [dataBase, setDataBase] = React.useState(null)

    React.useEffect(() => {
        API.get()
            .then(res => {
                const result = Object.entries(res.data).map(([key, value]) => {
                    return {
                        id: key,
                        ...value
                    }
                })

                setDataBase(result)
                result.filter(item => item.id === id ? setBase(item) : '')
            })

    }, [])
    
    console.log(dataBase);
    if (!base) return <Loader />


    return (
        <>
            <div className={cls.container}>
                <div className={cls.cars_card}>
                    <div className={cls.card_image}>
                        <img src={base.photo ? base.photo : notCar} alt={base.title} />
                    </div>
                    <div className={cls.card_body}>
                        <h1>{base.title}</h1>
                        <ul className={cls.card_list}>
                            <li><span>Коробка передач: </span>{base.transmission}</li>
                            <li><span>Тип кузова:</span> {base.type}</li>
                            <li><span>Объем двигателя:</span> {base.fuel}</li>
                            <li><span>Цвет машины:</span> {base.color}</li>
                            <li><span>Тип топлива:</span> {base.gas}</li>
                        </ul>
                        <div className={cls.list_price}>
                            <p>Цена: </p>
                            <span>{base.price} $</span> / сутки
                        </div>
                        <div className={cls.buttons}>
                            <button className={cls.btn} onClick={() => {
                                window.open('https://t.me/sattarzanov')
                            }}>Забронировать</button>
                        </div>
                    </div>
                </div>

                <div className={cls.buttons2}>
                    <Link to={'/cars'} className={cls.btn2}><IoReturnUpBack /></Link>
                </div>
            </div>

        </>
    )
}

export default CarsMore