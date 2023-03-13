import styles from './Register.module.scss';
import Form from '../Form/Form';

function Register() {
    return (
        <Form 
        title="Регистрация" submitTitle="Зарегистрироваться"
        link="/login" linkQuestion="Уже зарегистрированы?" linkText="Войти"
        >
            <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Имя"
            />
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

export default Register;