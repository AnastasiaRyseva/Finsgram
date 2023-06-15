import React from 'react'; 
import styles from './index.module.scss'
import headerLogo from '../../images/FinLogo.svg'

import ContentWrapper from '../ContentWrapper'
import RegisterButton from '../RegisterButton';

function Header () {

    return (
        <header className={styles.header}>
            <ContentWrapper>
                <div className={styles.header__row}>
                    <a href="#!" className={styles.header__logo}>
                        <img src={headerLogo} alt='logo' />
                        <span>ФИНСГРАМ</span>
                    </a>
                    <nav className={styles.header__nav}>
                        <ul className={styles.header__nav_list}>
                            <li className={styles.header__nav_item}>
                                <a href="#!"
                                    className={styles.header__nav_link}
                                >
                                    о чемпионате
                                </a>
                            </li>
                            <li className={styles.header__nav_item}>
                                <a href="#!"
                                    className={styles.header__nav_link}
                                >
                                    новости
                                </a>
                            </li>
                            <li className={styles.header__nav_item}>
                                <a href="#!" className={styles.header__nav_link}>
                                    контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#!">
                        <RegisterButton/>
                    </a>
                </div>
            </ContentWrapper>
        </header>
    ) 
}

export default Header