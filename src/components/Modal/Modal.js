import { useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ isOpen, setIsOpen, children, title }) {
    function onClose () {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleEscape(event) {
          if (event.code === 'Escape') {
            setIsOpen(false)
          }
        }
      
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
      }, [setIsOpen])

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

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
    setIsOpen: PropTypes.func.isRequired, 
    children: PropTypes.any.isRequired, 
    title: PropTypes.string
}

export default Modal;