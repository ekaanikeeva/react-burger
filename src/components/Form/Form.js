import styles from "./Form.module.scss";
import { Link } from "react-router-dom";

function Form({ title, children, submitTitle, linkQuestion, link, linkText }) {
    return (
        <form className={styles.form}>
            <h1 className={styles.title}>{title}</h1>
            {children}

            <button type="submit" className={styles.submit}>{submitTitle}</button>

            <p className={styles.linkQuestion}>
                {linkQuestion}
                <Link to={link} className={styles.link}>
                    {linkText}
                </Link>
            </p>
        </form>
    )
}

export default Form;