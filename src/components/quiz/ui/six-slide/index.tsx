import img from '../../../../assets/impossible.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const SixSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={519} />
      </div>
      <p className={stylesCommon.subText}>
        * Источник: 3-месячные клинические исследования, проведенные в США и
        Японии при участии 160 взрослых курильщиков в каждом из них в реальных
        (амбулаторных) условиях
      </p>
    </div>
  )
}

export default SixSlide
