import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Button() {
  return (
    <div className="container box_button d-flex justify-content-center">
      <Link to="/swap">
        <button className={styles.button + ' d-flex justify-content-center'}>
          <span style={{ color: 'black' }} className={styles.textButton}>
            Abrir Swap{' '}
          </span>
        </button>
      </Link>
    </div>
  )
}
