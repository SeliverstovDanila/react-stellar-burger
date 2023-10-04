import { ingredientPropType } from '../../../utils/prop-types.js'
import styles from './ingredient-details.module.css';


function IngredientDetails({ ingredients }) {
    return (
        <div className={styles.details_container}>
            <img alt='Изображение ингредиента бургера' src={ingredients.image} className={`${styles.details_image} mb-4`} />
            <p className='text text_type_main-medium mb-8'>{ingredients.name}</p>
            <ul className={`${styles.details_list} mb-15`}>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{ingredients.calories}</p>
                </li>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{ingredients.proteins}</p>
                </li>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{ingredients.fat}</p>
                </li>
                <li className={styles.details_item}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{ingredients.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}
// ошибку Failed prop type выдает проверка IngredientDetails.propTypes
IngredientDetails.propTypes = {
    ingredients: ingredientPropType.isRequired,
}

export default IngredientDetails;