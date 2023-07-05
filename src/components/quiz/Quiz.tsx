import { useRef, useState } from 'react'
import classNames from 'classnames'

import { useQuizContext } from '../../containers/QuizProvider'
import { quizData } from '../../data/quizData'
import { Modal } from '../modal/Modal'
import RateUsModal from '../rate-us-modal/RateUsModal'
import styles from './quiz.module.scss'
import EightCaption from './ui/eight-caption '
import EightSlide from './ui/eight-slide'
import FifthCaption from './ui/fifth-caption'
import FifthSlide from './ui/fifth-slide'
import FirstCaption from './ui/first-caption'
import FirstSlide from './ui/first-slide'
import FourthCaption from './ui/fourth-caption'
import FourthSlide from './ui/fourth-slide'
import SecondCaption from './ui/second-caption'
import SecondSlide from './ui/second-slide'
import SevenCaption from './ui/seven-caption'
import SevenSlide from './ui/seven-slide'
import SixCaption from './ui/six-caption'
import SixSlide from './ui/six-slide'
import ThirdCaption from './ui/third-caption'
import ThirdSlide from './ui/third-slide'

const captionInnersToSlideId = {
  '1': <FirstCaption />,
  '2': <SecondCaption />,
  '3': <ThirdCaption />,
  '4': <FourthCaption />,
  '5': <FifthCaption />,
  '6': <SixCaption />,
  '7': <SevenCaption />,
  '8': <EightCaption />,
}

const bodySlideToId = {
  '1': <FirstSlide />,
  '2': <SecondSlide />,
  '3': <ThirdSlide />,
  '4': <FourthSlide />,
  '5': <FifthSlide />,
  '6': <SixSlide />,
  '7': <SevenSlide />,
  '8': <EightSlide />,
}

export const Quiz = () => {
  const {
    currentQuestion,
    handleNextQuestion,
    startFromTheBeginning,
    setIsBeenRated,
    isStartModal,
    setIsStartModal,
    handlePrevious,
    isBeenRated,
  } = useQuizContext()

  const [isRateModal, setIsRateModal] = useState(false)
  const [buttonText, setButtonText] = useState('Продолжить')

  const handleCloseRateModal = () => {
    setTimeout(() => {
      setIsRateModal(false)
    }, 500)

    setButtonText('В начало')
  }

  const handleCloseModal = () => setIsStartModal(false)

  const caption = useRef<HTMLDivElement | null>(null)

  const scrollToTop = () => {
    caption.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const isFinal = currentQuestion.id === quizData.length.toString()

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
      setIsBeenRated(false)
    } else {
      handleNextQuestion()
    }

    handleClick()
    scrollToTop()
  }

  const handleOpenModal = () => {
    setIsRateModal(true)
  }

  const buttonOnClick = () =>
    isFinal && !isBeenRated ? handleOpenModal() : handleNext()

  const handlePreviousQuestion = () => {
    if (currentQuestion.id === '1') return
    handlePrevious()
    handleClick()
    scrollToTop()
  }

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
          <div className={styles.sliderCaption} ref={caption}>
            <div>
              {Array.from({ length: quizData.length }, (_, i) =>
                String(i + 1),
              ).map((item, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    styles.circlePoint,
                    currentQuestion.id === item && styles.circlePoint__active,
                  )}
                ></div>
              ))}
            </div>
            <div>
              {
                captionInnersToSlideId[
                  currentQuestion.id as keyof typeof captionInnersToSlideId
                ]
              }
            </div>
          </div>
          <div className={styles.slideBody}>
            {bodySlideToId[currentQuestion.id as keyof typeof bodySlideToId]}
          </div>
          {!isFinal ? (
            <div className={styles.buttonsWrapper}>
              <button onClick={handlePreviousQuestion}>Назад</button>
              <button onClick={handleNext}>Далее</button>
            </div>
          ) : (
            <button className={styles.button} onClick={buttonOnClick}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
      <Modal handleCloseModal={handleCloseModal} isModal={isStartModal} />
      <RateUsModal
        handleCloseModal={handleCloseRateModal}
        isModal={isRateModal}
      />
    </>
  )
}
