import { useState, useEffect } from 'react'
import styles from "./app.module.css";
// import { data } from "../../utils/data";
import { AppHeader } from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import getIngredients from "./../../utils/burger-api.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const [state, setState] = useState({
    loading: false,
    error: false,
    ingredient: []
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    getIngredients()
      .then((item) => {
        setState({
          ingredient: item.data,
          loading: false,
          error: false
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error: true });
      })
  }, [])

  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.main}>
        {state.loading && <Loader />}
        {!state.loading && !state.error && state.ingredient.length && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients ingredient={state.ingredient} />
            <BurgerConstructor ingredient={state.ingredient} />
          </DndProvider>
        )}
      </main>
    </>
  );
}

const Loader = () => {
  return <p className="loader">Добавляем секретые специи</p>
}

export default App;
