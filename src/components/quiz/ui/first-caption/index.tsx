import { useQuizContext } from '../../../../containers/QuizProvider'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const FirstCaption = () => {
  const { calculation } = useQuizContext()

  return (
    <>
      <p className={styles.gratitude}>
        Спасибо, а вот ваш примерный результат:
      </p>
      <p className={stylesCommon.boldGreen}>
        {calculation.total ?? calculation.default} ₽
      </p>
    </>
  )
}

export default FirstCaption
