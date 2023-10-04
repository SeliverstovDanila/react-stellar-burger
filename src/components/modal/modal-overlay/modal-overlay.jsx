import PropTypes from 'prop-types';
import styles from "./modal-overlay.module.css";


function ModalOverlay() {

    return (
        <div className={styles.overlay}>
            {/* {children} */}
        </div>
    )

};

ModalOverlay.propTypes = {
    // children: PropTypes.func.isRequired
}

export default ModalOverlay;