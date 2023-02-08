import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ isOpen, setIsOpen, children, title }) {
    const onClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleEscape(event) {
          if (event.code === 'Escape') {
            onClose();
          }
        }
      
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
      }, [])

    return createPortal(
        <div className={isOpen ? styles.modal : styles.modal_hidden}>
            <ModalOverlay onClose={onClose}/>
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

export default Modal;