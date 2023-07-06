import img from '../../../../assets/thank-you.png'
import AdultCaution from '../adult-caution'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const EightSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={490} />
      </div>
      <AdultCaution />
      <p
        className={stylesCommon.subText}
        style={{ marginTop: 'var(--space-m)' }}
      >
        4. По сравнению с предыдущими моделями IQOS.
      </p>
    </div>
  )
}

export default EightSlide
