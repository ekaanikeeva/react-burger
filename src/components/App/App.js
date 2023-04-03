import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader'
import Main from '../../pages/Main/Main';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import IngredientPage from '../../pages/IngredientPage/IngredientPage';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useCookies } from 'react-cookie';
import { getUserAsync } from '../../services/asyncActions/auth';
import { ProtectedRouteElement, ProtectedRouteUnAuth } from '../ProtectedRoute';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { isErrorAction } from '../../services/actions/auth';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
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
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<ProtectedRouteElement element={<Register />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/login" element={<ProtectedRouteElement element={<Login />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login' />} />
          {!background && <Route path='/ingredients/:ingredientId' element={<IngredientPage />} />}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        : <Preloader />
      }
        
    </div>
  );
}


export default App;
