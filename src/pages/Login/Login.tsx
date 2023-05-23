import { useDispatch } from 'react-redux';
import { FunctionComponent, ChangeEvent, FormEvent } from 'react';
import styles from './Login.module.scss';
import Form from '../../components/Form/Form';
import { authUserAsync } from '../../services/asyncActions/auth';
import { useValidation } from '../../utils/Validate';
import { TAppDispatch } from '../../utils/tsUtils';

const Login:FunctionComponent = () => {
    const dispatch: TAppDispatch = useDispatch();
    const { values, handleChange, errors, isValid } = useValidation();


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        dispatch(authUserAsync(values.email, values.password))
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
                onChange={handleChange}
                required
            />
            <span
                className={
                    errors["email"] === ""
                    ? styles.error
                    : styles.error_active
                }
            >
                {errors["email"]}
            </span>
            <input
                type="password"
                name="password"
                className={styles.input}
                placeholder="Пароль"
                onChange={handleChange}
                required
            />
            <span
                className={
                    errors["password"] === ""
                        ? styles.error
                        : styles.error_active
                }
            >
                {errors["password"]}
            </span>
        </Form>
    )
}

export default Login;