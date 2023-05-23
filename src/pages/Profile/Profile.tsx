import styles from "./Profile.module.scss";
import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateUserAsync, logoutUserAsync } from "../../services/asyncActions/auth";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutAction } from "../../services/actions/auth";
import { TAppDispatch } from "../../utils/tsUtils";
import { IRootState } from '../../services/reducers/rootReducer';

const Profile:FunctionComponent = () => {
    const dispatch:TAppDispatch = useDispatch();
    const user = useSelector((store:IRootState) => store.authReducer.user);
    const token = useSelector((store:IRootState) => store.authReducer.accessToken);
    const refreshToken = useSelector((store:IRootState) => store.authReducer.refreshToken);
    const [email, setEmail] = useState(user.email || null)
    const [password, setPassword] = useState(user.password || null)
    const [name, setName] = useState(user.name || null)
    const [cookies, setCookie, removeCookie] = useCookies<string>(['stellarBurger']);
    const [isFocus, setIsFocus] = useState(false);
    const [values, setValues] = useState<Record<string, string> | null>(null);

    function handleChangeEmail(evt:ChangeEvent) {
        const target = evt.target as HTMLInputElement;
        const value = target.value;
        const inputName = target.name;
        setEmail(value)
        setValues({...values, [inputName]: value})
    }

    function handleChangeName(evt:ChangeEvent) {
        const target = evt.target as HTMLInputElement;
        const value = target.value;
        const inputName = target.name;
        setName(value)
        setValues({...values, [inputName]: value})
    }

    function handleChangePassword(evt:ChangeEvent) {
        const target = evt.target as HTMLInputElement;
        const value = target.value;
        const inputName = target.name;
        setPassword(value)
        setValues({...values, [inputName]: value})
    }

    function logout(refreshToken: string | undefined) {
        if (refreshToken !== undefined) {
            dispatch(logoutUserAsync(refreshToken))
            removeCookie('accessToken');
            removeCookie('refreshToken');
        } else {
            dispatch(logoutAction());
            removeCookie('accessToken');
            removeCookie('refreshToken');
            
        }
    }

    function cancelUserData () {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => input.value = input.defaultValue);
        setIsFocus(false)
    }

    function saveUserData () {
        dispatch(updateUserAsync(token, values))
        setIsFocus(false)
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
                } onClick={() => logout(refreshToken)} to='/'>Выход</NavLink>
            </nav>

            <div>
                <Input
                    value={name}
                    name={'name'}
                    icon={'EditIcon'}
                    placeholder={'Имя'}
                    type={'text'}
                    defaultValue={user.name}
                    extraClass={styles.input}
                    onIconClick={() => {
                        if (name !== null) {
                            dispatch(updateUserAsync(token, { "name": name }))
                        }
                    }}
                    onChange={handleChangeName}
                    onFocus={() => setIsFocus(true)}
                />
                <Input
                    value={email}
                    name={'email'}
                    icon={'EditIcon'}
                    placeholder={'Логин'}
                    type={'email'}
                    extraClass={styles.input}
                    defaultValue={user.email}
                    onChange={handleChangeEmail}
                    onFocus={() => setIsFocus(true)}
                    onIconClick={() => {
                        if (email !== null) {
                            dispatch(updateUserAsync(token, { "email": email }))
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
                    onFocus={() => setIsFocus(true)}
                    onIconClick={() => {
                        if (password !== null) {
                            dispatch(updateUserAsync(token, { "password": password }))
                        }
                    }}
                    value={password}
                />
                <div className={styles.edit__buttons}>
                    <button type="button" className={isFocus ? styles.cancel : styles.hidden}
                    onClick={cancelUserData}>Отмена</button>
                    <button type="button" className={isFocus ? styles.save : styles.hidden}
                    onClick={saveUserData}>Сохранить</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;