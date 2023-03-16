import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss'
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword'; 
import ResetPassword from '../ResetPassword/ResetPassword';
import Profile from '../Profile/Profile';
import { useCookies } from 'react-cookie';
import { getUserAsync } from '../../services/asyncActions/auth';
import { ProtectedRouteElement, ProtectedRouteUnAuth } from '../ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['stellarBurger']);
  const navigate = useNavigate();


  const isError = useSelector(store => store.authReducer.authError)

  useEffect(() => {
    if(cookies.accessToken !== undefined) {
      dispatch(getUserAsync(cookies.accessToken, cookies.refreshToken))
    } else navigate('/login')
  }, [])


  return (
    <div className={styles.root}>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<ProtectedRouteElement element={<Main />}/>} />
        <Route path="/register" element={<ProtectedRouteUnAuth element={<Register />} />}  />
        <Route path="/login" element={<ProtectedRouteUnAuth element={<Login />} />} />
        <Route path="/forgot-password" element={<ProtectedRouteUnAuth element={<ForgotPassword />} />} />
        <Route path="/reset-password" element={<ProtectedRouteUnAuth element={<ResetPassword />} />} />
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile />}/>}  />
      </Routes>
    </div>
  );
}

export default App;
