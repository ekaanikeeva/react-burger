import styles from "./Form.module.scss";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Form({ title, children, submitTitle, linkQuestion, link, linkText }) {
    const location = useLocation();

    return (
        <form className={styles.form}>
            <h1 className={styles.title}>{title}</h1>
            {children}

            <button type="submit" className={styles.submit}>{submitTitle}</button>

            <span className={styles.linkQuestion}>
                {linkQuestion}
                <Link to={link} className={styles.link}>
                    {linkText}
                </Link>
            </span>

            {location.pathname === '/login' &&
                <span className={styles.linkQuestion}>
                    Забыли пароль?
                    <Link to='/forgot-password' className={styles.link}>
                        Восстановить пароль
                    </Link>
                </span>
            }

        </form>
    )
}

export default Form;