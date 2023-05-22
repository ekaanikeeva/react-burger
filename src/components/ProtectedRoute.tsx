import { Navigate } from 'react-router-dom';
import { FunctionComponent, ReactElement } from 'react' ;

type TProps = {
    element: ReactElement, 
    isAuth: boolean, 
    routeWithAuthrized: boolean, 
    replaceRoute: string
}

export const ProtectedRouteElement:FunctionComponent<TProps> = ({ element, isAuth, routeWithAuthrized, replaceRoute }) => {
    if (isAuth && routeWithAuthrized || !isAuth && !routeWithAuthrized) {
        return element;
    } else {
        return <Navigate to={replaceRoute} replace />
    }
} 
