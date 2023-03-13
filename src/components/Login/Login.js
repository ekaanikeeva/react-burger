import styles from './Login.module.scss';
import Form from '../Form/Form';

function Login () {
    return (
        <Form
            title="Вход" submitTitle="Войти"
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
                required
            />
            <input
                type="password"
                name="password"
                className={styles.input}
                placeholder="Пароль"
            />
        </Form>
    )
}

export default Login;