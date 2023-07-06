import classNames from 'classnames'

import stylesCommon from '../common.module.scss'

const FourthCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p
        className={stylesCommon.slateText}
        style={{ marginBottom: 'var(--space-m)' }}
      >
        IQOS нагревает табак без горения. Без дыма. Без пепла
      </p>
      <p className={stylesCommon.slateTextSmall}>
        Полный переход на IQOS – лучший выбор для вашего здоровья, чем
        продолжение курения сигарет
      </p>
    </>
  )
}

export default FourthCaption
