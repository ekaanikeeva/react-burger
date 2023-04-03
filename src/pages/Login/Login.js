import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.module.scss';
import Form from '../../components/Form/Form';
import { authUserAsync } from '../../services/asyncActions/auth';

function Login () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    function handleChangeEmail(evt) {
        const value = evt.target.value;
        setEmail(value)
    }

    function handleChangePassword(evt) {
        const value = evt.target.value;
        setPassword(value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(authUserAsync(email, password))
    }


    return (
        <Form
            title="Вход" submitTitle="Войти" onSubmit={handleSubmit}
            link="/register" linkQuestion="Вы — новый пользователь?" linkText="Зарегистрироваться"
        >
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="E-mail"
                minLength={2}
                maxLength={50}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleChangeEmail}
                required
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

export default Login;