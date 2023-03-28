import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ResetPassword from '../ResetPassword/ResetPassword';
import Profile from '../Profile/Profile';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useCookies } from 'react-cookie';
import { getUserAsync } from '../../services/asyncActions/auth';
import { ProtectedRouteElement, ProtectedRouteUnAuth } from '../ProtectedRoute';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { isErrorAction } from '../../services/actions/auth';
import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['stellarBurger']);
  const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
  const isAuth = useSelector(store => store.authReducer.isUserAuth);
  const isLoading = useSelector(store => store.authReducer.isLoading);
  const accessTokenSelector = useSelector(store => store.authReducer.accessToken);
  const refreshTokenSelector = useSelector(store => store.authReducer.refreshToken)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { state } = useLocation()
  const location = useLocation();
  let background = state && state.background;

  function onClose() {
    dispatch(getCurrentIngredientAction(null))
    navigate(-1);
  }
  useEffect(() => {
    if (cookies.accessToken === 'undefined') {
      dispatch(isErrorAction('user is not authorized'))
    } else {
      dispatch(getUserAsync(cookies.accessToken, cookies.refreshToken))
    }
  }, [])

  useEffect(() => {
    if (accessTokenSelector !== null && accessTokenSelector) {
      setCookie("accessToken", accessTokenSelector)


    } if (refreshTokenSelector) {
      setCookie("refreshToken", refreshTokenSelector)
    }

  }, [isAuth])
  // console.log(cookies)
  // removeCookie("accessToken")

  return (
    <div className={styles.root}>
      <AppHeader />
      {background &&
         <Routes>
          <Route path='/ingredients/:ingredientId'
            element={
              <Modal title="Детали ингредиента" onClose={onClose}>
                <IngredientDetails />
              </Modal>
            } />
            </Routes> 
        }
      {isLoading ?
        <Routes location={location || background}>
          <Route path="/" element={<ProtectedRouteElement element={<Main />} isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login' />} />
          <Route path="/register" element={<ProtectedRouteElement element={<Register />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/login" element={<ProtectedRouteElement element={<Login />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login' />} />
          {!background && <Route path='/ingredients/:ingredientId' element={<IngredientDetails />} />}
        </Routes>

        : <Preloader />
      }
        
    </div>
  );
}


export default App;
