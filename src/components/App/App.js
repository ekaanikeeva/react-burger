import React from 'react';
import styles from './App.module.scss'
import { ingredientList } from '../../utils/data';
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';

function App() {
  return (
    <div className={styles.root}>
        <AppHeader />
        <Main ingredients={ ingredientList } />
    </div>
  );
}

export default App;
