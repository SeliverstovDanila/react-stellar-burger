import styles from './ingredient-details.module.css';
import { ingredientPropType } from '../../../utils/prop-types.js'


function IngredientDetails({ ingredient }) {
    return (
        <div className={styles.details_container}>
            <img alt='Нет изображения' src={ingredient.image} className={`${styles.details_image} mb-4`} />
            <p className='text text_type_main-medium mb-8'>{ingredient.name}</p>
            <ul className={`${styles.details_list} mb-15`}>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{ingredient.calories}</p>
                </li>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                </li>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{ingredient.fat}</p>
                </li>
                <li className={styles.details_item}>
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