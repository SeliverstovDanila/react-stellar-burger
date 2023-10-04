import React, { useRef, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from '../../utils/prop-types'
import styles from "../burger-ingredients/burger-ingredients.module.css";
import IngredientGroup from "../burger-ingredients/ingredient-group/ingredient-group.jsx";
import Modal from "../modal/modal.jsx"
import IngredientDetails from "./ingredient-details/ingredient-details.jsx"


function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = useState('bun');
    const [visibleDetails, setVisibleDetails] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    //Фильтрация булок, соусов и начинки согласно категориям
    const bun = useMemo(() => { return ingredients.filter(item => item.type === 'bun') });
    const sauce = useMemo(() => { return ingredients.filter(item => item.type === 'sauce') });
    const filling = useMemo(() => { return ingredients.filter(item => item.type === 'main') });

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

    const showDetails = useCallback((item) => {
        setCurrentItem(item);
        setVisibleDetails(true);
    }, []);

    const closeDetails = () => {
        setVisibleDetails(false);
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
                        ingredients={bun}
                        showDetails={showDetails}
                    />
                </li>
                <li ref={sauceRef}>
                    <IngredientGroup
                        name='Соусы'
                        ingredients={sauce}
                        showDetails={showDetails}
                    />
                </li>
                <li ref={fillingRef}>
                    <IngredientGroup
                        name='Начинка'
                        ingredients={filling}
                        showDetails={showDetails}
                    />
                </li>
            </ul>
            {visibleDetails &&
                <Modal onClose={closeDetails} title="Детали ингредиента">
                    <IngredientDetails ingredients={currentItem} />
                </Modal>
            }
        </section>
    );
}
BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerIngredients;