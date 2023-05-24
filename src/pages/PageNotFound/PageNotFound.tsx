import styles from "./PageNotFound.module.scss";
import { FunctionComponent } from 'react';

const PageNotFound:FunctionComponent = () => {
    return (
        <section className={styles.page}>
            <span className="text text_type_digits-large">404</span>
            
        </section>
    )
}

export default PageNotFound;