import styles from "./burger-constructor.module.css";
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../utils/prop-types'
import BurgerConstructorItem from "../burger-constructor/burger-constructor-item/burger-constructor-item.jsx";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor({ compound }) {
    return (
        <section className={styles.burgerConstructor}>
            <div className={styles.burgerConstructor_container}>
                <BurgerConstructorItem compound={compound} />
            </div>
            <div className={`${styles.burgerConstructor_info} mr-8`}>
                <p className={`${styles.burgerConstructor_price} text text_type_digits-medium`}> 10600
                    <CurrencyIcon type='primary' />
                </p>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}

BurgerConstructor.propTypes = {
    compound: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerConstructor