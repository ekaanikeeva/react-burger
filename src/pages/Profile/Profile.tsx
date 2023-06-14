import styles from "./Profile.module.scss";
import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { updateUserAsync } from "../../services/asyncActions/auth";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";

const Profile:FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(store => store.authReducer.user);
    const token = useAppSelector(store => store.authReducer.accessToken);
    const [email, setEmail] = useState<string | null>(user ? user.email : null)
    const [password, setPassword] = useState<string | null>(user ? user.password : null)
    const [name, setName] = useState<string | null>(user ? user.name : null)
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
            <ProfileNavigation />

            <div>
                <Input
                    value={name ? name : ''}
                    name={'name'}
                    icon={'EditIcon'}
                    placeholder={'Имя'}
                    type={'text'}
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
                    value={email ? email : ''}
                    name={'email'}
                    icon={'EditIcon'}
                    placeholder={'Логин'}
                    type={'email'}
                    extraClass={styles.input}
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
                    value={password ? password : ''}
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