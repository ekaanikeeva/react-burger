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
import Ingredient from '../Ingredient/Ingredient';
import { useCookies } from 'react-cookie';
import { getUserAsync } from '../../services/asyncActions/auth';
import { ProtectedRouteElement, ProtectedRouteUnAuth } from '../ProtectedRoute';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import Modal from '../Modal/Modal';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['stellarBurger']);
  const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients)
  // const { ingredientId } = useParams()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  let background = location.state && location.state.background;

  function onClose() {
    dispatch(getCurrentIngredientAction(null))
    navigate(-1);
  }

  useEffect(() => {
    if (cookies.accessToken !== undefined) {
      dispatch(getUserAsync(cookies.accessToken, cookies.refreshToken))
    } else navigate('/login')
  }, [])


  return (
    <div className={styles.root}>
      <AppHeader />
      <Routes location={background || location}>
        <Route exact path="/" element={<ProtectedRouteElement element={<Main />} />} />
        <Route path="/register" element={<ProtectedRouteUnAuth element={<Register />} />} />
        <Route path="/login" element={<ProtectedRouteUnAuth element={<Login />} />} />
        <Route path="/forgot-password" element={<ProtectedRouteUnAuth element={<ForgotPassword />} />} />
        <Route path="/reset-password" element={<ProtectedRouteUnAuth element={<ResetPassword />} />} />
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} />} />
        {!background && currentIngredient !== null &&
          <Route path='/ingredients/:ingredientId'
            element={
              <Modal title="Детали ингредиента" onClose={onClose}>
                <IngredientDetails currentIngredient={currentIngredient} />
              </Modal>
            } />
        }
        {/* <Route path='/ingredients/:ingredientId' element={<IngredientDetails currentIngredient={currentIngredient} />} /> */}
      </Routes>


    </div>
  );
}


export default App;
