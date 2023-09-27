# Каноническая работа проекта Stellar Burger 

# Этап "Промежуточный проект. CRA-заготовка и структура папок под компоненты"

## Описание проекта
В этой проектной работе посставлена задача создать главную страницу межгалактической бургерной. Ознакомиться с макетом можно по ссылке. Приложение не будет адаптивным(адаптивность можно добавить по желанию), т.е его не нужно готовить для мобильных и планшетных устройств.
А где вы еще можете попробовать галактические чизы? На первый заказ - скидки с:
## Ссылка на макет:

* [Макет в Figma](https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-(3-%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B0)_external_link?node-id=2973%3A2032&mode=dev)

## Stack technologies:
<a href="https://ru.legacy.reactjs.org/"><img src="https://i.ibb.co/9rqgkrH/icons8-50.png" width="50" height="50" alt = "React icon"> |  </a><a href="https://htmlbook.ru/css3"><img src="https://i.ibb.co/0ZFNwk7/free-icon-css-3-5968242.png" width="50" height="50" alt = "CSS3 icon"></a> |  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://i.ibb.co/XW2SHkT/free-icon-js-5968292.png" width="50" height="50" alt = "JavaScript icon"></a> |  <a href="https://webpack.js.org/"><img src="https://i.ibb.co/7CqRLMX/icons8-webpack-64.png" alt="icons8-webpack-64" width="50" height="50" alt = "Webpack icon"></a>
| --- | --- | --- | --- |
| React | CSS3 | &nbsp;&nbsp;&nbsp;JS | Webpack |

* Проект реализован для desktop версии.
* При верстке сайта использовались технологии:  
1.[Flex CSS](https://developer.mozilla.org/ru/docs/Web/CSS/flex).  
2.[Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
* Язык программирования - [JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript). В будущих обновлениях будет измененно на TypeScript.
* Проект собран с помощью сборщика модулей - [Webpack](https://webpack.js.org/)

## Инструкция по запуску
1. Склонируйте проект с помощью команды

```shell
git clone git@github.com:SeliverstovDanila/react-stellar-burger.git
```

2. Установите сборщик модулей

```shell
Перейдите в директорию командой cd react-stellar-burger и установите зависимости командами npm i либо yarn, в зависимости от используемого менеджера пакетов.
```

3. Запустите локальный сервер
```shell
Проект готов к началу работы, чтобы запустить его в режиме разработки воспользуйтесь командой npm start или yarn start. 
```

## Разработчик
<img src="https://media.giphy.com/media/zOvBKUUEERdNm/giphy.gif" width="150" height="150" alt = "Снова TypeError"/>  
   
Проект разработан студентом Я.Практикума, направления "Веб-разработчик плюс":  

 [Селиверстов Данила](https://github.com/SeliverstovDanila)

**ToDo List**  
>**Подключиться к API:**  
>В приложении используются захардкоженные данные. В будущих обновлениях необходимо заменить их на реальные.  
>Особенности реализации:
>1. Для выполнения запросов использовать Fetch.  
>2. URL-адрес домена вынести в отдельную константу.  
>3. Если при выполнении запроса к API произошли ошибки, нужно их обработать.  

>**Реализовать компоненты главной страницы: Modal и ModalOverlay:**  

>Открытие модального окна:  
>Модальное окно открывается по клику на соответствующий элемент страницы.  
>Клик по ингредиенту открывает модальное окно с описанием ингредиента.  
>Клик по кнопке «Оформить заказ» открывает модальное окно с описанием заказа.  

>Закрытие модального окна:  
>Клик по иконке крестика закрывает модальное окно.  
>Клик по ModalOverlay или нажатие на клавишу “Esc” закрывают модальное окно.  

>**Типизация**  
>Большинство из компонентов должны принимать пропсы. А все пропсы надо валидировать — необходимо покрыть необходимые компоненты проверкой типов PropTypes.  
  
>**Дополнительно**  
>Реализовать адаптивную верстку проекта под мобильные устройства и планшеты.  
>Добавить страницу на GitHub Pages. 