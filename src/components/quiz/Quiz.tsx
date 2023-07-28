import { useCallback, useRef, useState } from 'react'
import classNames from 'classnames'

import backgroundCaption from '../../assets/spend.png'
import { useQuizContext } from '../../containers/QuizProvider'
import { quizData } from '../../data/quizData'
import { sendGoal } from '../../utils/send-goal'
import { Calculator } from '../calculator/calculator'
import { Modal } from '../modal/Modal'
import styles from './quiz.module.scss'
import AdultCaution from './ui/adult-caution'
import EightCaption from './ui/eight-caption '
import EightSlide from './ui/eight-slide'
import FirstCaption from './ui/first-caption'
import FirstSlide from './ui/first-slide'
import SecondCaption from './ui/second-caption'
import SecondSlide from './ui/second-slide'

const captionInnersToSlideId = {
  '1': <FirstCaption />,
  '2': <SecondCaption />,
  '3': <EightCaption />,
}

const bodySlideToId = {
  '1': <FirstSlide />,
  '2': <SecondSlide />,
  '3': <EightSlide />,
}

export const Quiz = () => {
  const {
    currentQuestion,
    handleNextQuestion,
    startFromTheBeginning,
    isStartModal,
    setIsStartModal,
    handlePrevious,
    calculation,
  } = useQuizContext()

  const handleCloseModal = () => {
    sendGoal('quizStart')
    setIsStartModal(false)
  }

  const caption = useRef<HTMLDivElement | null>(null)

  const scrollToTop = () => {
    caption.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const isFinal = currentQuestion.id === (quizData.length - 1).toString()
  const isFirstSlide = currentQuestion.id === '0'

  const [animate, setAnimate] = useState(false)

  const handleClick = () => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 1000)
  }

  const handleNext = () => {
    if (isFinal) {
      startFromTheBeginning()
    } else {
      handleNextQuestion()
    }

    handleClick()
    scrollToTop()
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion.id === '0') return
    handlePrevious()
    handleClick()
    scrollToTop()
  }
  const handleGetResult = useCallback(() => {
    handleNext()

    sendGoal('cigarettePrice', {
      'Выберите ценовую категорию сигарет, которые Вы курите':
        calculation.cigarette,
    })
    sendGoal('packCount', {
      'Количество пачек в день': calculation.cigarettePacksInDay,
    })
    sendGoal('lighterCount', {
      'Сколько примерно зажигалок Вы покупаете в месяц':
        calculation.lightersMonthly,
    })
    sendGoal('lighterCount', {
      'Сколько примерно зажигалок Вы покупаете в месяц': {
        'Количество зажигалок в месяц': calculation.lightersMonthly,
      },
    })
    sendGoal('lighterPrice', {
      'Введите ценовую категорию зажигалок, которые Вы используете':
        calculation.lighter,
    })
  }, [calculation])

  return (
    <>
      <div
        className={classNames(
          styles.container,
          animate && styles.fadeIn,
          isStartModal && styles.startModal,
        )}
      >
        <div>
          <div
            className={classNames(
              styles.sliderCaption,
              isFirstSlide && styles.noPadding,
            )}
            ref={caption}
          >
            <div>
              {Array.from({ length: quizData.length }, (_, i) => String(i)).map(
                (item, idx) => (
                  <div
                    key={idx}
                    className={classNames(
                      styles.circlePoint,
                      currentQuestion.id === item && styles.circlePoint__active,
                    )}
                  ></div>
                ),
              )}
            </div>
            <div>
              {
                captionInnersToSlideId[
                  currentQuestion.id as keyof typeof captionInnersToSlideId
                ]
              }
              {isFirstSlide && (
                <>
                  <div
                    className={styles.firstSlideBackground}
                    style={{ backgroundImage: `url(${backgroundCaption})` }}
                  ></div>
                </>
              )}
            </div>
          </div>
          <div className={styles.slideBody}>
            {bodySlideToId[currentQuestion.id as keyof typeof bodySlideToId]}
            {isFirstSlide && (
              <>
                <div>
                  <Calculator />
                  <AdultCaution />
                </div>
              </>
            )}
          </div>
          <>
            {isFirstSlide && (
              <button className={styles.button} onClick={handleGetResult}>
                Результат
              </button>
            )}
            {!isFinal ? (
              <div
                className={classNames(
                  styles.buttonsWrapper,
                  isFirstSlide && styles.displayNone,
                )}
              >
                <button onClick={handlePreviousQuestion}>Назад</button>
                <button onClick={handleNext}>Далее</button>
              </div>
            ) : (
              <button
                className={classNames(
                  styles.button,
                  isFirstSlide && styles.displayNone,
                )}
                onClick={handleNext}
              >
                В начало
              </button>
            )}
          </>
        </div>
      </div>
      <Modal handleCloseModal={handleCloseModal} isModal={isStartModal} />
    </>
  )
}
