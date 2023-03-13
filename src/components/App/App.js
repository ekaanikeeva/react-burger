import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword'; 
import ResetPassword from '../ResetPassword/ResetPassword';
function App() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
