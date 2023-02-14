import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import { getIngredientsApi } from '../../utils/ingredientsApi';
import { IngredientsContext } from '../../services/ingredientsContext';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    getIngredientsApi()
      .then(data => {
        setIngredients(data.data)
      })
      .catch(err => console.log('Не удалось загрузить ингредиенты'))
  }

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <div className={styles.root}>
      <AppHeader />
      <IngredientsContext.Provider value={ingredients}>
        <Main />
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;
