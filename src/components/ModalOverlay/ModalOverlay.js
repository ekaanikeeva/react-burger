import styles from "./ModalOverlay.module.scss";

function ModalOverlay ({ onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay;