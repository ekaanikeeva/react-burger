import { useEffect, FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TModalProps = {
    onClose: () => void,
    title?: string,
    children: ReactNode, 
}

const Modal:FunctionComponent<TModalProps> = ({ onClose, children, title }) => {

    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
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
        , document.querySelector('#modals')as HTMLElement

    )
}

export default Modal;