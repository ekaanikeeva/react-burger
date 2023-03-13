import styles from "./Profile.module.scss";
import { NavLink } from "react-router-dom";
import { EmailInput, Input, EditIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
    return (
        <section className={styles.profile}>
            <nav className={styles.navigation}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to='/profile'>Профиль</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to='/profile/orders'>История заказов</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to='/'>Выход</NavLink>
            </nav>

            <div>
                <Input
                    name={'name'}
                    icon={'EditIcon'}
                    placeholder={'Имя'}
                    type={'text'}
                    extraClass={styles.input}
                />
                <Input
                    name={'email'}
                    icon={'EditIcon'}
                    placeholder={'Логин'}
                    type={'email'}
                    extraClass={styles.input}
                />
                <Input
                    name={'password'}
                    icon={'EditIcon'}
                    placeholder={'Пароль'}
                    type={'password'}
                    extraClass={styles.input}
                />
            </div>
        </section>
    )
}

export default Profile;