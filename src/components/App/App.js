import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import { ingredientsUrl } from '../../utils/constants';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    fetch(ingredientsUrl)
      .then(res => res.json())
      .then(data => {
        setIngredients(data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <div className={styles.root}>
      <AppHeader />
      <Main ingredients={ingredients} />
    </div>
  );
}

export default App;
