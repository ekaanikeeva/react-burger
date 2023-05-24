import { FunctionComponent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.scss';
import Form from '../../components/Form/Form';
import { registerUserAsync } from '../../services/asyncActions/auth';
import { useValidation } from '../../utils/Validate';
import { TAppDispatch } from '../../utils/tsUtils';

const Register:FunctionComponent = () => {
    const dispatch:TAppDispatch = useDispatch();
    const { values, handleChange, errors, isValid } = useValidation();

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        dispatch(registerUserAsync(values.email, values.password, values.name))
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
                onChange={handleChange}
                required
            />
            <span
                className={
                    errors["name"] === ""
                        ? styles.error
                        : styles.error_active
                }
            >
                {errors["name"]}
            </span>
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

export default Register;