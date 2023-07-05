import img from '../../../../assets/purple-wave.png'
import AdultCaution from '../adult-caution'
import styles from './index.module.scss'

const ThirdSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={444} />
      </div>
      <AdultCaution />
    </div>
  )
}

export default ThirdSlide
