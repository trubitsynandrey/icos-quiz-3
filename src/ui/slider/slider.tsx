import { useState } from 'react'
import ReactSlider from 'react-slider'
import cn from 'classnames'

import { useQuizContext } from '../../containers/QuizProvider'
import st from './slider.module.scss'

type TProps = {
  labels: string[]
  title: string
  symbol: string | string[]
  min: number
  max: number
  step: number
  name: string
}

export const Slider = ({
  labels,
  title,
  symbol,
  max,
  min,
  step,
  name,
}: TProps) => {
  const { setCalculationByName } = useQuizContext()
  const [value, setValue] = useState(min)

  return (
    <div className={st.wrapper}>
      <div className={st.title}>{title}</div>
      <div className={st.sliderContainer}>
        <span>
          {value} {symbol[value / step - 1] ?? symbol}
        </span>
      </div>
      <ReactSlider
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(value) => {
          setValue(value)
          setCalculationByName(name, value)
        }}
        className={st.slider}
        thumbClassName={st.thumb}
        trackClassName={st.track}
      />
      <div className={cn(st.sliderLabels, { [st.small]: labels.length > 2 })}>
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}
