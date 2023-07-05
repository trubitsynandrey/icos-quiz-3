import classNames from 'classnames'

import stylesCommon from '../common.module.scss'

const FifthCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p className={stylesCommon.slateText} style={{ marginBottom: '16px' }}>
        Сигареты подвергают окружающих воздействию дыма – IQOS не подвергает.
      </p>
      <p className={stylesCommon.slateTextSmall}>
        IQOS не выделяет дым, воздействующий на вас и окружающих.
      </p>
      <p className={stylesCommon.slateTextSmall}>
        При использовании IQOS выделяется табачный пар, который содержит
        значительно меньше вредных веществ* и оказывает меньшее воздействие
        на качество воздуха по сравнению с сигаретным дымом.
      </p>
    </>
  )
}

export default FifthCaption
