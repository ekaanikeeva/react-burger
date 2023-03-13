import styles from './ForgotPassword.module.scss';
import Form from '../Form/Form';

function ForgotPassword () {
    return (
        <Form
            title="Восстановление пароля" submitTitle="Восстановить"
            link="/login" linkQuestion="Вспомнили пароль?" linkText="Войти"
        >
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Укажите e-mail"
                minLength={2}
                maxLength={50}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
            />
        </Form>
    )
}

export default ForgotPassword;