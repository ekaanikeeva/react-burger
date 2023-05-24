import React, { FunctionComponent } from 'react'
import styles from "./ModalOverlay.module.scss";

type TModalOverlayProps = {
    onClose: () => void,
}

const ModalOverlay:FunctionComponent<TModalOverlayProps> = ({ onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}></div>
    )
}


export default ModalOverlay;