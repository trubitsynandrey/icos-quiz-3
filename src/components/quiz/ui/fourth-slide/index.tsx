import img from '../../../../assets/burning-chicken.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const FourthSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={474} />
      </div>
      <p className={stylesCommon.importantText}>
        Важно: не исключает риски, в аэрозоле содержится никотин, вызывающий
        зависимость
      </p>
    </div>
  )
}

export default FourthSlide
