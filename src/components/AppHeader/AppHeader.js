import React from "react";
import styles from './AppHeader.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

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

            <Link exact to='/' className={styles.logo}>
                <Logo />
            </Link>

            <Link to='/profile' className={styles.account}>
            <ProfileIcon type="secondary" />
                Личный кабинет</Link>
        </header>
    );
}

export default AppHeader;
