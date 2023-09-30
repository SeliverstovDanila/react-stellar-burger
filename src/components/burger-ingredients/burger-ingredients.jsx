import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from '../../utils/prop-types'
import styles from "../burger-ingredients/burger-ingredients.module.css";
import IngredientGroup from "../burger-ingredients/ingredient-group/ingredient-group.jsx";


function BurgerIngredients({ compound }) {
    const [current, setCurrent] = useState('bun')
    //Фильтрация булок, соусов и начинки согласно категориям
    const bun = useMemo(() => {return compound.filter(item => item.type === 'bun')});
    const sauce = useMemo(() => {return compound.filter(item => item.type === 'sauce')});
    const filling = useMemo(() => {return compound.filter(item => item.type === 'main')});

    const bunsRef = useRef(null);
    const sauceRef = useRef(null);
    const fillingRef = useRef(null);

    //Авто-скролл к категории при нажатии на соответсвующую кнопку
    const handleTab = (value) => {
        setCurrent(value)
        if (value === "bun") bunsRef.current.scrollIntoView({ behavior: "smooth" });
        if (value === "sauce") sauceRef.current.scrollIntoView({ behavior: "smooth" });
        if (value === "filling") fillingRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className={styles.ingredients}>
            <p className={`text text_type_main-large pt-10 pb-5`}>Соберите бургер</p>
            <div className={`${styles.ingredients_tab_panel} mb-10 pb-40`}>
                <Tab value="bun" active={current === 'bun'} onClick={handleTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={handleTab}>
                    Соусы
                </Tab>
                <Tab value="filling" active={current === 'main'} onClick={handleTab}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${styles.ingredients_items} custom-scroll`}>
                <li ref={bunsRef}>
                    <IngredientGroup
                        name='Булки'
                        compound={bun}
                    />
                </li>
                <li ref={sauceRef}>
                    <IngredientGroup
                        name='Соусы'
                        compound={sauce}
                    />
                </li>
                <li ref={fillingRef}>
                    <IngredientGroup
                        name='Начинка'
                        compound={filling}
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