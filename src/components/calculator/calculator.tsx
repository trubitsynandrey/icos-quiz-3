import { Slider } from '../../ui/slider/slider'
import st from './calculator.module.scss'

export const Calculator = () => {
  return (
    <div className={st.calculator}>
      <Slider
        title={'Выберите ценовую категорию сигарет, которые Вы курите'}
        labels={['от 119 ₽', 'Более 230 ₽']}
        symbol={'₽'}
        min={119}
        max={230}
        step={1}
      />
      <Slider
        title={'Количество пачек в день'}
        labels={['0,5', '1', '1.5', '2']}
        symbol={['пачки', 'пачка', 'пачки', 'пачки']}
        min={0.5}
        max={2}
        step={0.5}
      />
      <Slider
        title={'Сколько примерно зажигалок Вы покупаете  в месяц'}
        labels={['1', '2', '3', '4']}
        symbol={['зажигалка', 'зажигалки', 'зажигалки', 'зажигалки']}
        min={1}
        max={4}
        step={1}
      />
      <Slider
        title={'Введите ценовую категорию зажигалок, которые Вы используете'}
        labels={['от 25 ₽', 'Более 100 ₽']}
        symbol={'₽'}
        min={25}
        max={100}
        step={1}
      />
    </div>
  )
}
