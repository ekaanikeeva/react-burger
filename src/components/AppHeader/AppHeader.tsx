import { FunctionComponent } from "react";
import styles from './AppHeader.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, NavLink } from "react-router-dom";

const AppHeader: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                }>
                    <BurgerIcon type="primary" />
                    Конструктор
                </NavLink>
                <NavLink to='/feed' className={styles.link}>
                    <ListIcon type="primary" />
                    Лента заказов</NavLink>
            </nav>

            <Link to='/' className={styles.logo}>
                <Logo />
            </Link>

            <NavLink to='/profile' className={({ isActive }) =>
                isActive ? styles.activeLink : styles.account
            }>
                <ProfileIcon type="secondary" />
                Личный кабинет
            </NavLink>
        </header>
    );
}

export default AppHeader;
