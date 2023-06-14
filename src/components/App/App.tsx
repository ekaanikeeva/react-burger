import { useEffect, useState, FunctionComponent, useMemo } from 'react';
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
import { ingredientsAsync } from '../../services/asyncActions/ingredients';
import { ProtectedRouteElement } from '../ProtectedRoute';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { isErrorAction } from '../../services/actions/auth';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import { IRootState } from '../../services/reducers/rootReducer';
import { TAppDispatch } from '../../utils/tsUtils';
import OrderFeed from '../../pages/OrderFeed/OrderFeed';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsAction";
import OrderItem from '../OrderItem/OrderItem';
import UserOrderHistory from '../../pages/UserOrderHistory/UserOrderHistory';
import { WS_CONNECTION_USER_START, WS_CONNECTION_USER_CLOSED } from '../../services/actions/wsUserActions';

const App: FunctionComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['stellarBurger']);
  const isWsConnected = useSelector((store: IRootState) => store.wsReducer);
  const userWsConnected = useSelector((store: IRootState) => store.wsUserOrdersReducer);
  const isAuth = useSelector((store: IRootState) => store.authReducer.isUserAuth);
  const isLoading = useSelector((store: IRootState) => store.authReducer.isLoading);
  const accessTokenSelector = useSelector((store: IRootState) => store.authReducer.accessToken);
  const refreshTokenSelector = useSelector((store: IRootState) => store.authReducer.refreshToken);
  const feedOrders = useSelector((store: IRootState) => store.wsReducer.orders);
  const userOrders = useSelector((store: IRootState) => store.wsUserOrdersReducer.orders);
  const dispatch: TAppDispatch = useDispatch();
  const navigate = useNavigate();
  let { state } = useLocation()
  const location = useLocation();
  let background = state && state.background;


  const [isUserForgotPassword, setIsUserForgotPassword] = useState(false);

  function onClose() {
    dispatch(getCurrentIngredientAction(null))
    navigate(-1);
  }

  function onOrderClose() {
    navigate(-1);
  }
  useEffect(() => {
    dispatch(ingredientsAsync())

    if (cookies.accessToken === 'undefined') {
      dispatch(isErrorAction('user is not authorized'))
    } else {
      dispatch(getUserAsync(cookies.accessToken, cookies.refreshToken))
    }

    if (cookies.isUserVisited) {
      setIsUserForgotPassword(true)
    }
  }, [])

  useMemo(() => {
    dispatch({ type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders/all' });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED})
    }

    
  },[dispatch])


  useEffect(() => {
    if (accessTokenSelector !== null && accessTokenSelector) {
      setCookie("accessToken", accessTokenSelector)
      const token = accessTokenSelector.slice(7)

      dispatch({type: WS_CONNECTION_USER_START, payload: `wss://norma.nomoreparties.space/orders?token=${token}`})

      return() => {
        dispatch({type: WS_CONNECTION_USER_CLOSED})
      }
    } if (refreshTokenSelector) {
      setCookie("refreshToken", refreshTokenSelector)
    }
  }, [isAuth])


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
          <Route path='/feed/:orderId'
            element={
              <Modal onClose={onOrderClose}>
                {isWsConnected.orders && isWsConnected.error === null ? <OrderItem orders={feedOrders} /> : <Preloader />}
              </Modal>
            } />
          <Route path='/profile/orders/:orderId'
            element={userWsConnected.orders && userWsConnected.error === null ?
              <Modal onClose={onOrderClose}>
                 <OrderItem orders={userOrders} /> 
              </Modal>
              : <Preloader />
            } />
        </Routes>
      }
      {isLoading ?
        <Routes location={location || background}>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<ProtectedRouteElement element={<Register />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/login" element={<ProtectedRouteElement element={<Login />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword isVisited={setIsUserForgotPassword} />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          <Route path="/feed" element={<OrderFeed />} />
          {isUserForgotPassword &&
            <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} isAuth={isAuth} routeWithAuthrized={false} replaceRoute='/' />} />
          }
          <Route path="/profile/orders" element={<ProtectedRouteElement element={<UserOrderHistory />} isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login'/>}></Route>
          <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login' />} />
          {!background && <Route path='/ingredients/:ingredientId' element={<IngredientPage />} />}
          {!background && <Route path='/feed/:orderId' element={isWsConnected.wsConnected && !isWsConnected.error ? <OrderItem orders={feedOrders} /> : <Preloader />} />}
          {!background && <Route path='/profile/orders/:orderId' element={<ProtectedRouteElement isAuth={isAuth} routeWithAuthrized={true} replaceRoute='/login' element={userWsConnected.wsConnected && userWsConnected.error === null ? <OrderItem orders={userOrders}/> : <Preloader />}/>} />}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        : <Preloader />
      }

    </div>
  );
}


export default App;
