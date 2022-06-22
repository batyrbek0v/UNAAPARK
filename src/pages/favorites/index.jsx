import React from 'react'
import { getSavedCars, removeSavedCar } from '../../configs/api'
import { useAuth } from '../../providers/useAuth'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import notImage from '../../components/images/notCar.png'
import './Card.scss'
import Card from '../../components/Card/CarCards/Card'
import Loader from '../../components/Loader'

const Favorites = () => {
  const [base, setBase] = React.useState()
  const { users } = useAuth()


  React.useEffect(() => {
    // getSavedCars(users && users.id)
    //   .then(res => {
    //     const result = Object.entries(res.data)
    //       .map(([key, value]) => {
    //         return {
    //           id: key,
    //           ...value
    //         }
    //       })

    //     setBase(result)
    //   })

      getSavedCars(users && users.id)
        .then(res => {
          const result = Object.values(res.data)

          setBase(result)
        })
  }, [users])

  const handleRemoveCar = (id) => {
    console.log(id);
    removeSavedCar(users.id, id)
  }



  if (base == null) return <h3>Вы ничего не сохраняли :)</h3>

  if (!base) return <Loader />
  console.log(base);

  return (
    <div className='savedCars'>
      <h1>Ваши сохраненные машины</h1>
      <div className='card_container'>
        {
          base && base.map(({ id, title, photo, price }) => (
            <div className="cars_card" key={id}>
              <button
                className='favorites_btn'
                onClick={() => {
                  handleRemoveCar(id)
                }}
              >
                <MdClose />
              </button>
              <div className="card_image">
                <img src={photo ? photo : notImage} alt={title} />
              </div>
              <div className="card_body">
                <h2>{title}</h2>
                <div className="card_price">
                  <h4>Цена:</h4>
                  <p>
                    {price}$
                    <span> / в сутки</span>
                  </p>
                </div>
              </div>
              <div className="card_footer">
                <Link className='card_footer_btn' to={`/carsmore/${id}`}>Подробнее</Link>
              </div>
            </div>
          )).reverse()
        }
      </div>
    </div>
  )
}

export default Favorites