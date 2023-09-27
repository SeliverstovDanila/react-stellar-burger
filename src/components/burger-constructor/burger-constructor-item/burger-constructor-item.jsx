import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-item.module.css';

function BurgerConstructorItem({ compound }) {

    //Отфилтровывает булки от остальных ингридиентов
    const bunsArray = compound.filter(el => el.type === 'bun');
    const element = compound.filter(el => el.type !== 'bun');
    const bun = bunsArray[0];

    return (
        <div className={styles.constructorItem}>
            <ul className={styles.constructorItem_container}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image} />
            </ul>
            <ul className={`${styles.constructorItem_scroll} custom-scroll`}>
                {element.map((el) => (
                    <li className={styles.constructorItem_compound_container} key={el._id}>
                        <div className={styles.constructorItem_icon}>
                            <DragIcon type='primary' />
                        </div>
                        <ConstructorElement
                            text={el.name}
                            price={el.price}
                            thumbnail={el.image} />
                    </li>
                ))}
            </ul>
            <ul className={styles.constructorItem_container}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image} />
            </ul>
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    compound: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerConstructorItem