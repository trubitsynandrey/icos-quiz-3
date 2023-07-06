import img from '../../../../assets/affect.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const FifthSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={337} />
      </div>
      <p
        className={stylesCommon.importantText}
        style={{ marginBottom: 'var(--space-m)' }}
      >
        Важно: IQOS не исключает риски для вас и окружающих.
      </p>
      <p className={stylesCommon.subText}>
        *Среднее снижение уровней ряда вредных веществ (кроме никотина) по
        сравнению с их содержанием в дыме эталонной сигареты.
      </p>
    </div>
  )
}

export default FifthSlide
