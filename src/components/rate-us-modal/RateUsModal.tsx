import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { useQuizContext } from '../../containers/QuizProvider'
import { RateUsIcon } from '../../ui/icons/rate-us-icon'
import { Star } from '../../ui/icons/star'
import { sendGoal } from '../../utils/send-goal'
import styles from './RateUsModal.module.scss'

type Props = {
  handleCloseModal: () => void
  isModal: boolean
}

const RateUsModal = ({ handleCloseModal, isModal }: Props) => {
  const [firstFilledIndex, setFirstFilledIndex] = useState<number | null>(null)
  const [secondFilledIndex, setSecondFilledIndex] = useState<number | null>(
    null,
  )

  const { setIsBeenRated } = useQuizContext()

  const timeout = useRef<number>()

  useEffect(() => {
    if (secondFilledIndex === null || firstFilledIndex === null) return
    setIsBeenRated(true)
    handleCloseModal()
    timeout.current = setTimeout(() => {
      setFirstFilledIndex(null)
      setSecondFilledIndex(null)
    }, 500)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [firstFilledIndex, secondFilledIndex])

  const handleFirst = useCallback((index: number) => {
    setFirstFilledIndex(index)
    sendGoal('usefullRate', {
      'Информация в игре была для Вас полезна?': index + 1,
    })
    sendGoal('usefullRate', {
      'Оценка информации': `Оценка ${index + 1}`,
    })
  }, [])

  const handleSecond = useCallback((index: number) => {
    setSecondFilledIndex(index)
    sendGoal('perceptionRate', {
      'Изменилось ли Ваше восприятие цены на устройство и стики?': index + 1,
    })
    sendGoal('perceptionRate', {
      'Оценка восприятия': {
        Оценки: { Оценка: `Оценка ${index + 1}` },
      },
    })
  }, [])

  return (
    <>
      <div
        className={classNames(
          styles.rateUsBackDrop,
          !isModal && styles.rateUsBackDrop__closed,
        )}
      ></div>
      <div
        className={classNames(
          styles.rateUsInner,
          !isModal && styles.rateUsInner__closed,
        )}
      >
        <div>
          <p>Ваше мнение важно для нас</p>
        </div>
        <div className={styles.whiteBox}>
          <div>
            <p>Информация в игре была для Вас полезна?</p>
            <div>
              {Array.from({ length: 5 }).map((_, idx) => {
                const shouldFill =
                  firstFilledIndex !== null ? firstFilledIndex >= idx : false

                return (
                  <button
                    onClick={() => {
                      handleFirst(idx)
                    }}
                    key={idx}
                    className={classNames(shouldFill && styles.filled)}
                  >
                    <Star />
                  </button>
                )
              })}
            </div>
          </div>
          <div>
            <p>Изменилось ли Ваше восприятие цены на устройство и стики?</p>
            <div>
              {Array.from({ length: 5 }).map((_, idx) => {
                const shouldFill =
                  secondFilledIndex !== null ? secondFilledIndex >= idx : false

                return (
                  <button
                    onClick={() => {
                      handleSecond(idx)
                    }}
                    key={idx}
                    className={classNames(shouldFill && styles.filled)}
                  >
                    <Star />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.rateUsIconWrapper}>
          <RateUsIcon />
        </div>
      </div>
    </>
  )
}

export default RateUsModal
