import styles from './ForgotPassword.module.scss';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import Form from '../../components/Form/Form';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { resetPassword } from '../../utils/ingredientsApi';
function ForgotPassword({isVisited}) {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['stellarBurger']);
    const [email, setEmail] = useState(null)

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;
        setEmail(value)
        isVisited(true)
        setCookie("isUserVisited", true, {maxAge: 500})
    }

    function handleReset(e) {
        e.preventDefault()

        resetPassword(email)
        .then(res => navigate('/reset-password'))
        .catch(err => console.log(err))
    }
    return (
        <Form
            title="Восстановление пароля" submitTitle="Восстановить"
            link="/login" linkQuestion="Вспомнили пароль?" linkText="Войти" onSubmit={handleReset}
        >
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Укажите e-mail"
                minLength={2}
                maxLength={50}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
            />
        </Form>
    )
}

ForgotPassword.propTypes = {
    isVisited: PropTypes.func
}

export default ForgotPassword;