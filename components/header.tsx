import styles from '../styles/Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className={styles.header}>
            <FontAwesomeIcon icon={faBars} size='1x'/>
            <FontAwesomeIcon icon={faSnowflake} size='1x'/>
            <FontAwesomeIcon icon={faInfo} size='1x'/>
        </header>
    );
}

export default Header;