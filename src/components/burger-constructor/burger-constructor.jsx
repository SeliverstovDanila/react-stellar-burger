import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./burger-constructor.module.css";
// import PropTypes from 'prop-types';
// import { ingredientPropType } from '../../utils/prop-types';
import BurgerConstructorItem from "../burger-constructor/burger-constructor-item/burger-constructor-item.jsx";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.jsx';
import OrderDetails from './order-details/order-details';
import { v4 as uuid } from 'uuid';
import { ADD_INGREDIENT } from "../../services/actions/current-ingredient.js";
import { getOrder } from "../../services/actions/order.js";



function BurgerConstructor() {
    const dispatch = useDispatch();
    const [detailsVisible, setVisible] = useState(false);
    const { bun, ingredient } = useSelector(
        state => state.constructorIngredients
    )
    const { orderRequest, orderFailed, order } = useSelector(
        state => state.order
    );
    const getIds = (bun, ingredient) => {
        const ids = ingredient.map((item) => (
            item._id
        ))
        return JSON.stringify([...ids, bun._id])
    }
    const getTotalCost = useCallback((bun, ingredient) => {
        const sum = ingredient.reduce((totalCost, currentItem) => {
            return totalCost + currentItem.price;
        }, 0);
        const totalCost = Object.keys(bun).length > 0 ? sum + (2 * bun.price) : sum
        return isNaN(totalCost) ? 0 : totalCost
    }, [bun, ingredient])

    function handleOpenModal() {
        dispatch(getOrder(getIds(bun, ingredient)));
        setVisible(true);
    }
    function handleClose() {
        setVisible(false);
    }
    const handleDrop = (item) => {
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: { ...item, key: uuid() }
        });
    };

    return (
        <section className={styles.burgerConstructor}>
            <div className={styles.burgerConstructor_container}>
                <BurgerConstructorItem onDropHandler={handleDrop} />
            </div>
            <div className={`${styles.burgerConstructor_info} mr-8`}>
                <p className={`${styles.burgerConstructor_price} text text_type_digits-medium`}>
                    {getTotalCost(bun, ingredient)}
                    <CurrencyIcon type='primary' />
                </p>
                <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {detailsVisible && !orderRequest && !orderFailed && order.number &&
                <Modal onClose={handleClose}>
                    <OrderDetails />
                </Modal>}
        </section>
    );
}

// BurgerConstructor.propTypes = {
//     ingredient: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
// }

export default BurgerConstructor