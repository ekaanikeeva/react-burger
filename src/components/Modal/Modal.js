import { useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ onClose, children, title }) {


    useEffect(() => {
        function handleEscape(event) {
            if (event.code === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    return createPortal(
        <div className={styles.modal}>
            <ModalOverlay onClose={onClose} />
            <div className={styles.modal__container}>
                <button type="button" className={styles.close} onClick={onClose}><CloseIcon type="primary" /></button>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.child__container}>
                    {children}
                </div>

            </div>
        </div>
        , document.body

    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string
}

export default Modal;