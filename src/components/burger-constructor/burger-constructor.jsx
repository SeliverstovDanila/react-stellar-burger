import React, { useState } from 'react';
import styles from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';
import BurgerConstructorItem from "../burger-constructor/burger-constructor-item/burger-constructor-item.jsx";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.jsx';
import OrderDetails from './order-details/order-details';


function BurgerConstructor({ ingredients }) {

    const [detailsVisible, setVisible] = useState(false);

    function handleOpenModal() {
        setVisible(true);
    }
    function handleClose() {
        setVisible(false);
    }

    return (
        <section className={styles.burgerConstructor}>
            <div className={styles.burgerConstructor_container}>
                <BurgerConstructorItem ingredients={ingredients} />
            </div>
            <div className={`${styles.burgerConstructor_info} mr-8`}>
                <p className={`${styles.burgerConstructor_price} text text_type_digits-medium`}> 10600
                    <CurrencyIcon type='primary' />
                </p>
                <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {detailsVisible &&
                <Modal onClose={handleClose}>
                    <OrderDetails />
                </Modal>}
        </section>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerConstructor