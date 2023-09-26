import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientPropType} from '../../utils/prop-types'
import styles from "../burger-ingredients/burger-ingredients.module.css";
import IngredientGroup from "../burger-ingredients/ingredient-group/ingredient-group.jsx";

function BurgerIngredients({compound}) {
    const [current, setCurrent] = useState('buns')

    const buns = compound.filter(item => item.type === 'buns')
    const sauce = compound.filter(item => item.type === 'sauce')
    const main = compound.filter(item => item.type === 'main')

    const bunsRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)

    const handleTab = (value) => {
        setCurrent(value)
        if (value === "buns") bunsRef.current.scrollIntoView({ behavior: "smooth" })
        if (value === "sauce") sauceRef.current.scrollIntoView({ behavior: "smooth" })
        if (value === "main") mainRef.current.scrollIntoView({ behavior: "smooth" })
    };
    return (
        <section className={styles.ingredients}>
            <p className={`text text_type_main-large pt-10 pb-5`}>Соберите бургер</p>
            <div className={`${styles.ingredients_tab_panel} mb-10 pb-40`}>
                <Tab value="buns" active={current === 'buns'} onClick={handleTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={handleTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={handleTab}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${styles.ingredients_items} custom-scroll`}>
                <li ref={bunsRef}>
                    <IngredientGroup
                        name='Булки'
                        compound={buns}
                    />
                </li>
                <li ref={sauceRef}>
                    <IngredientGroup
                        name='Соусы'
                        compound={sauce}
                    />
                </li>
                <li ref={mainRef}>
                    <IngredientGroup
                        name='Начинка'
                        compound={main}
                    />
                </li>
            </ul>
        </section>
    );
}
BurgerIngredients.propTypes = {
    compound: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerIngredients;