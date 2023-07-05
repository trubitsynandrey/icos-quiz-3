import classNames from 'classnames'

import stylesCommon from '../common.module.scss'

const SixCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '16px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p className={stylesCommon.slateTextSmall}>
        Исследования* показали, что чувство удовлетворенности при использовании
        IQOS у тех, кто полностью на него перешел, сравнимо с удовлетворенностью
        тех, кто продолжал курить сигареты. IQOS нагревает табак без горения,
        позволяя насладиться вкусом настоящего табака.
      </p>
    </>
  )
}

export default SixCaption
