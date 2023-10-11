import { ingredientPropType } from '../../../utils/prop-types.js'
import styles from './ingredient-details.module.css';


function IngredientDetails({ ingredient }) {
    return (
        <div className={styles.detail_container}>
            <img alt='Изображение ингредиента бургера' src={ingredient.image} className={`${styles.detail_image} mb-4`} />
            <p className='text text_type_main-medium mb-8'>{ingredient.name}</p>
            <ul className={`${styles.detail_list} mb-15`}>
                <li className={styles.detail_item}>
                    <p className='text text_type_main-default'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{ingredient.calories}</p>
                </li>
                <li className={styles.detail_item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                </li>
                <li className={styles.detail_item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{ingredient.fat}</p>
                </li>
                <li className={styles.detail_item}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired,
}

export default IngredientDetails;