import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.scss';
import Form from '../Form/Form';
import { registerUserAsync } from '../../services/asyncActions/auth';

function Register() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)

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

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(registerUserAsync(email, password, name))
    }
    return (
        <Form 
        title="Регистрация" submitTitle="Зарегистрироваться" onSubmit={handleSubmit}
        link="/login" linkQuestion="Уже зарегистрированы?" linkText="Войти"
        >
            <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Имя"
                onChange={handleChangeName}
            />
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="E-mail"
                // minLength={2}
                // maxLength={50}
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleChangeEmail}
                // required
            />
            <input
                type="password"
                name="password"
                className={styles.input}
                placeholder="Пароль"
                onChange={handleChangePassword}
            />
        </Form>
    )
}

export default Register;