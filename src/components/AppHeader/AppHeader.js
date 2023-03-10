import React from "react";
import styles from './AppHeader.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <a className={styles.burgerLink}>
                    <BurgerIcon type="primary" />
                    Конструктор
                </a>
                <a className={styles.link}>
                    <ListIcon type="primary" />
                    Лента заказов</a>
            </nav>

            <a className={styles.logo} href="/">
                <Logo />
            </a>

            <a className={styles.account} href="/">
            <ProfileIcon type="secondary" />
                Личный кабинет</a>
        </header>
    );
}

export default AppHeader;
