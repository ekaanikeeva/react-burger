import styles from "./Profile.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
    const user = useSelector(store => store.authReducer.user);

    const changeUserData = () => {
        console.log('sdgf')
    }

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
                    defaultValue={user !== null ? user.name : ''}
                    extraClass={styles.input}
                    onIconClick={changeUserData}
                />
                <Input
                    name={'email'}
                    icon={'EditIcon'}
                    placeholder={'Логин'}
                    type={'email'}
                    extraClass={styles.input}
                    defaultValue={user !== null ? user.email : ''}
                />
                <Input
                    name={'password'}
                    icon={'EditIcon'}
                    placeholder={'Пароль'}
                    type={'password'}
                    extraClass={styles.input}
                    defaultValue='111111'
                />
            </div>
        </section>
    )
}

export default Profile;