import { Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRouteElement = ({ element }) => {
    const navigate = useNavigate();
    const authInfo = useSelector(store => store.authReducer.isUserAuth);

    return authInfo ? element : navigate('/login');
} 

export const ProtectedRouteUnAuth = ({ element }) => {
    const navigate = useNavigate();
    const authInfo = useSelector(store => store.authReducer.isUserAuth);

    return !authInfo ? element : navigate('/')
}