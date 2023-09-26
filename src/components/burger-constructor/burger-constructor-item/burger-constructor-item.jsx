import PropTypes from 'prop-types'
import {ingredientPropType} from '../../../utils/prop-types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-item.module.css';

function BurgerConstructorItem({ compound }) {
    const bunsArray = compound.filter(item => item.type === 'buns')
    const buns = bunsArray[0]
    const element = compound.filter(item => item.type !== 'buns')

    return (
        <div className={styles.constructorItem}>
            <div className={styles.constructorItem_container}>
            {buns && buns(
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${buns.name} (верх)`}
                    price={buns.price}
                    thumbnail={buns.image} />
            )}
            </div>
            <div className={`${styles.constructorItem_scroll} custom-scroll`}>
                {element.map((item) => (
                    <div className={styles.constructorItem_scroll_container} key={item._id}>
                        <div className={styles.constructorItem_icon}>
                            <DragIcon type='primary' />
                        </div>
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image} />
                    </div>
                ))}
            </div>
            <div className={styles.constructorItem_container}>
            {buns && buns(
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${buns.name} (низ)`}
                    price={buns.price}
                    thumbnail={buns.image} />
            )}
            </div>
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    compound: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerConstructorItem