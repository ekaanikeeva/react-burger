import styles from './ForgotPassword.module.scss';
import Form from '../../components/Form/Form';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { resetPassword } from '../../utils/ingredientsApi';
function ForgotPassword() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState(null)

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;
        setEmail(value)
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

export default ForgotPassword;