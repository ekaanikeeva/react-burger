import styles from "./Profile.module.scss";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateUserAsync } from "../../services/asyncActions/auth";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.authReducer.user);
    const token = useSelector(store => store.authReducer.accessToken);

    const [email, setEmail] = useState(user.email || null)
    const [password, setPassword] = useState(user.password || null)
    const [name, setName] = useState(user.name || null)

    function handleChangeEmail(evt) {
        const value = evt.target.value;
        setEmail(value)
    }

    function handleChangeName(evt) {
        const value = evt.target.value;
        setName(value)
    }

    function handleChangePassword(evt) {
        const value = evt.target.value;
        setPassword(value)
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
                    defaultValue={user.name}
                    extraClass={styles.input}
                    onIconClick={() => {
                        if (name !== null) {
                            dispatch(updateUserAsync(token, {"name": name}))
                        }
                    }}
                    onChange={handleChangeName}
                />
                <Input
                    name={'email'}
                    icon={'EditIcon'}
                    placeholder={'Логин'}
                    type={'email'}
                    extraClass={styles.input}
                    defaultValue={user.email}
                    onChange={handleChangeEmail}
                    onIconClick={() => {
                        if (password !== null) {
                            dispatch(updateUserAsync(token, {"email": email}))
                        }
                    }}
                />
                <Input
                    name={'password'}
                    icon={'EditIcon'}
                    placeholder={'Пароль'}
                    type={'password'}
                    extraClass={styles.input}
                    onChange={handleChangePassword}
                    onIconClick={() => {
                        if (password !== null) {
                            dispatch(updateUserAsync(token, {"password": password}))
                        }
                    }}
                />
            </div>
        </section>
    )
}

export default Profile;