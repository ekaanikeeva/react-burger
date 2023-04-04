import PropTypes from 'prop-types';
import styles from "./Form.module.scss";
import { Link, useLocation } from "react-router-dom";

function Form({ title, children, submitTitle, linkQuestion, link, linkText, onSubmit }) {
    const location = useLocation();
    
    return (
        <form className={styles.form} onSubmit={onSubmit}>
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

Form.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    submitTitle: PropTypes.string.isRequired,
    linkQuestion: PropTypes.string,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Form;