import classNames from 'classnames'

import stylesCommon from '../common.module.scss'
import styles from './index.module.scss'

const ThirdCaption = () => {
  return (
    <>
      <p
        className={classNames(stylesCommon.boldGreen, stylesCommon.small)}
        style={{ marginBottom: '4px' }}
      >
        В чем преимущества IQOS?
      </p>
      <p className={stylesCommon.slateText}>
        Возможность выбрать своего фаворита из разнообразия вкусов HEETS или
        Fiit
      </p>
      <ul className={styles.list}>
        <li>Классические табачные вкусы.</li>
        <li>Ароматические табачные вкусы без ментола.</li>
        <li>Ароматические вкусы с ментолом.</li>
      </ul>
    </>
  )
}

export default ThirdCaption
