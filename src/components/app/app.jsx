import { useState, useEffect } from 'react'
import styles from "./app.module.css";
// import { data } from "../../utils/data";
import { AppHeader } from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


const API = "https://norma.nomoreparties.space/api";

function getCheckResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  } else {
    return res.json();
  }
}

function getIngredients() {
  return fetch(`${API}/ingredients/`)
    .then(getCheckResponse)
}

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
          <>
            <BurgerIngredients ingredient={state.ingredient} />
            <BurgerConstructor ingredient={state.ingredient} />
          </>
        )}
      </main>
    </>
  );
}

const Loader = () => {
  return <p className="loader">Добавляем секретые специи</p>
}

export default App;
