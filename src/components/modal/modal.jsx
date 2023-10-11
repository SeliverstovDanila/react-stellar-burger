import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const modalRoot = document.getElementById("root-modals");

function Modal({ children, title, onClose }) {

    useEffect(() => {
        const handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
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
                <div className={styles.modal}>
                    <div className={styles.modal_container}>
                        <span className={`${styles.modal_title} text text_type_main-large`}>
                            {title}
                        </span>
                        <CloseIcon onClick={onClose} type='primary' />
                    </div>
                    {children}
                </div>
            </>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Modal