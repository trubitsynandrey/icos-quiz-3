import stylesCommon from '../common.module.scss'

const SecondSlide = () => {
  return (
    <div>
      <p className={stylesCommon.whiteText} style={{ marginBottom: '8px' }}>
        Стики HEETS созданы для IQOS, а Fiit – для lil SOLID. Однако, все стики
        имеют одинаковые размеры, поэтому какой бы вкус Вы ни выбрали для
        использования с Вашим устройством, это лучший выбор по сравнению
        с продолжением курения сигарет. При этом только использование HEETS
        вместе с IQOS гарантирует ряд научно доказанных преимуществ.
      </p>
      <p className={stylesCommon.subText}>
        3. Цена за пачку/блок стиков в фирменных магазинах Q STORE и ряде
        магазинов-партнеров Q PARTNER. Цены могут меняться. Уточняйте в
        конкретном выбранном Вами магазине. Предложение действительно, пока
        товар есть в наличии.
      </p>
    </div>
  )
}

export default SecondSlide
