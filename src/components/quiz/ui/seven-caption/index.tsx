import classNames from 'classnames'

import stylesCommon from '../common.module.scss'

const SevenCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p className={stylesCommon.slateText} style={{ marginBottom: '16px' }}>
        IQOS нагревает табак без горения.
      </p>
      <p className={stylesCommon.slateTextSmall}>
        При использовании IQOS выделяется на 95% меньше вредных веществ
        по сравнению с сигаретами.*
      </p>
    </>
  )
}

export default SevenCaption
