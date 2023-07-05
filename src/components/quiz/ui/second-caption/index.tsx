import classNames from 'classnames'

import stickCards from '../../../../assets/stick-cards.png'
import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const SecondCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p className={stylesCommon.slateText}>
        Цена стиков за пачку и за блок<sup>3</sup>
      </p>
      <div className={styles.imgWrapper}>
        <img src={stickCards} />
      </div>
    </>
  )
}

export default SecondCaption
