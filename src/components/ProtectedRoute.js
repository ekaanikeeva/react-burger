import { Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRouteElement = ({ element }) => {
    const authInfo = useSelector(store => store.authReducer.isUserAuth)
    const navigate = useNavigate();

    return authInfo ? element : navigate('/login');
} 