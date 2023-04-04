import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRouteElement = ({ element, isAuth, routeWithAuthrized, replaceRoute }) => {
    if (isAuth && routeWithAuthrized || !isAuth && !routeWithAuthrized) {
        return element;
    } else {
        return <Navigate to={replaceRoute} replace />
    }
} 

ProtectedRouteElement.propTypes = {
    element: PropTypes.object.isRequired, 
    isAuth: PropTypes.bool.isRequired, 
    routeWithAuthrized: PropTypes.bool.isRequired, 
    replaceRoute: PropTypes.string.isRequired
}