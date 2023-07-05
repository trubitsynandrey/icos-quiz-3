import img from '../../../../assets/burning.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const SevenSlide = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={img} height={469} />
      </div>
      <p
        className={stylesCommon.importantText}
        style={{ marginBottom: '16px' }}
      >
        <p style={{ marginBottom: '8px' }}>
          Важно: не исключает риски, в аэрозоле содержится никотин, вызывающий
          зависимость.
        </p>
        <p>Важно: IQOS не исключает риски для Вас и гружающих</p>
      </p>
      <p className={stylesCommon.subText}>
        *«На 95% меньше вредных веществ» означает среднее снижение уровней
        вредных веществ (без учета никотина) в аэрозоле IQOS в сравнении с дымом
        эталонной сигареты.
      </p>
    </div>
  )
}

export default SevenSlide
