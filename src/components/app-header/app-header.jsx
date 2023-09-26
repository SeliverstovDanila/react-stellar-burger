import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <nav className={styles.header_navigation_left}>
                    <a href='#' className={`${styles.header_link} pl-5 pr-5 pt-4 pb-4`}>
                        <BurgerIcon type='primary' />
                        <span className='text text_type_main-default pl-2'>Конструктор</span>
                    </a>
                    <a href='#' className={`${styles.header_link} pl-5 pr-5 pt-4 pb-4`}>
                        <ListIcon type='secondary' />
                        <span className='text text_type_main-default text_color_inactive pl-2'>Лента заказов</span>
                    </a>
                    </nav>
                    <div className={`${styles.header_logo} pt-4 pb-4`}>
                        <Logo />
                    </div>
                    <nav className={styles.header_navigation_right}>
                    <a href='#' className={`${styles.header_link} pl-5 pr-5 pt-4 pb-4`}>
                        <ProfileIcon type='secondary' />
                        <span className='text text_type_main-default text_color_inactive pl-2'>Личный кабинет</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}