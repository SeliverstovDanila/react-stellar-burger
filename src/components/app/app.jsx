import styles from "./app.module.css";
import { data } from "../../utils/data";
import { AppHeader } from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {

  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.main}>
        <BurgerIngredients compound={data} />
        <BurgerConstructor compound={data} />
      </main>
    </>
  );
}

export default App;
