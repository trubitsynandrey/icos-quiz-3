import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const FirstCaption = () => {
  return (
    <>
      <p className={styles.gratitude}>
        Спасибо, а вот ваш примерный результат:
      </p>
      <p className={stylesCommon.boldGreen}>3 700 ₽</p>
    </>
  )
}

export default FirstCaption
