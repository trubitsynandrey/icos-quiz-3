import classNames from 'classnames'

import stylesCommon from '../common.module.scss'

const EightCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        спасибо за участие в игре!
      </p>
      <p className={stylesCommon.slateText}>
        Сервис «Аренда» за 10₽ на 7 дней,
      </p>
      <p className={stylesCommon.slateTextSmall} style={{ marginTop: '16px' }}>
        чтобы оценить преимущества самого совершенного<sup>4</sup> IQOS 3 DUOS.
      </p>
    </>
  )
}

export default EightCaption
