import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientPropType } from '../../../utils/prop-types'
import PropTypes from 'prop-types'
import styles from "./ingredient-group.module.css";

function IngredientGroup({ name, ingredients, showDetails }) {
    return (
        <>
            <p className='text text_type_main-medium'>
                {name}
            </p>
            <div className={styles.ingredientGroup}>
                {ingredients.map((el) =>
                    <div key={el._id} className={styles.ingredientGroup_item} onClick={() => showDetails(el)}>
                        <Counter count={1} size="default" extraClass="m-1" />
                        <img alt={el.name} src={el.image} className={'ml-4 mr-4'} />
                        <div className={styles.ingredientGroup_text}>
                            <span className='text text_type_digits-default mt-1 mb-1 pr-2'>
                                {el.price}
                            </span>
                            <CurrencyIcon type='primary' />
                        </div>
                        <p className={`${styles.ingredientGroup_text} text text_type_main-default`}>
                            {el.name}
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}
IngredientGroup.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default IngredientGroup