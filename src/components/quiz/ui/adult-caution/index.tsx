import imgUrl from '../../../../assets/adult.png'
import styles from './index.module.scss'

const AdultCaution = () => {
  return (
    <div className={styles.warning}>
      <div>
        <img src={imgUrl} />
      </div>
      <p>
        ВАЖНО: Не исключает риски. Аэрозоль содержит никотин, вызывающий
        зависимость
      </p>
    </div>
  )
}

export default AdultCaution
