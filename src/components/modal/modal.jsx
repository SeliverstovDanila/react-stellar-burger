import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const popupRoot = document.getElementById("react-modals");

function Modal({ children, title, onClose }) {

    useEffect(() => {
        const handleEscClose = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscClose);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay onClose={onClose} />
                <div className={styles.popup}>
                    <div className={styles.popup_container}>
                        <span className={`${styles.popup_title} text text_type_main-large`}>
                            {title}
                        </span>
                        <CloseIcon onClick={onClose} type='primary' className={styles.popup_close_icon} />
                    </div>
                    {children}
                </div>
            </>
        ),
        popupRoot
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Modal