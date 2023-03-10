import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';

function App() {
  return (
    <div className={styles.root}>
      <AppHeader />
        <Main />
    </div>
  );
}

export default App;
