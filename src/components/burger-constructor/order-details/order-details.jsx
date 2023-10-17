import React from "react";
import styles from "./order-details.module.css";
import successLogo from "../../../images/success.png";
import { useSelector } from 'react-redux';


export default function OrderDetails() {
    const { order } = useSelector(
        state => state.order
    )
    return (
        <div className={styles.order}>
            <p className={`${styles.order_number} text text_type_digits-large pb-8`}>{order.number}</p>
            <p className={`text text_type_main-medium pb-8`}>Идентификатор заказа</p>
            <img src={successLogo} alt="Логотип успешного оформления заказа" />
            <p className={`text text_type_main-small pt-10 pb-2`}>
                Ваш заказ начали готовить
            </p>
            <p className={`text text_type_main-default text_color_inactive pb-10`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
};