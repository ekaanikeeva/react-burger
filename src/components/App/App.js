import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import Register from '../Register/Register';

function App() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
