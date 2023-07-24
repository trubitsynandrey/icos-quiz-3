import { Input } from '../../ui/input/input'
import { Slider } from '../../ui/slider/slider'
import st from './calculator.module.scss'

export const Calculator = () => {
  return (
    <div className={st.calculator}>
      <Input
        label={'Выберите ценовую категорию сигарет, которые Вы курите'}
        name={'cigarette'}
        min={119}
      />
      <Slider
        title={'Количество пачек в день'}
        labels={['0,5', '1', '1.5', '2']}
        symbol={['пачки', 'пачка', 'пачки', 'пачки']}
        min={0.5}
        max={2}
        step={0.5}
        name={'cigarettePacksInDay'}
      />
      <Slider
        title={'Сколько примерно зажигалок Вы покупаете  в месяц'}
        labels={['1', '2', '3', '4']}
        symbol={['зажигалка', 'зажигалки', 'зажигалки', 'зажигалки']}
        min={1}
        max={4}
        step={1}
        name={'lightersMonthly'}
      />
      <Input
        label={'Введите ценовую категорию зажигалок, которые Вы используете'}
        name={'lighter'}
        min={25}
      />
    </div>
  )
}
