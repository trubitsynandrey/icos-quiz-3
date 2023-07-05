import alternativeImg from '../../../../assets/alternative.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const FirstSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={alternativeImg} height={566} />
      </div>
      <p className={stylesCommon.subText} style={{ marginBottom: '4px' }}>
        1. В России
      </p>
      <p className={stylesCommon.subText}>
        2. Расчет произведен на основании внутренних данных ФМСМ (включая
        исследование по среднему потреблению табачных стиков в месяц, с учетом
        средней стоимости пачки стиков HEETS, Fiit, Creations по данным
        AC Nielsen в период с февраля 2023 по апрель 2023, а также стоимости
        устройства IQOS 3 DUOS в фирменной рознице в указанный период, при
        условии его использования в течение 12 месяцев).
      </p>
    </div>
  )
}

export default FirstSlide
