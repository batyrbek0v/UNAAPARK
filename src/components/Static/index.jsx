import React from 'react'
import cls from './Static.module.scss'
import ProgressCircle from '../ProgressCircle/ProgressCircle'
import BetweenTitle from '../TitleForStatics/BetweenTitle'




const Static = () => {
  return (
    <React.Fragment>
      <div className={cls.statistics}>
        <BetweenTitle color="black" />
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={240} article="км" />
          }
          <p>МАХ.Скорость</p>
        </div>
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={191} article="л.с" />
          }
          <p>Мощность двигаетеля</p>
        </div>
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={43} article="л" />
          }
          <p>Объем топливного бака</p>
        </div>
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={289} article="" />
          }
          <p>Общая мощность</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Static
