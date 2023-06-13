import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styles from './ProfileNavigation.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch } from "../../utils/tsUtils";
import { IRootState } from "../../services/reducers/rootReducer";
import { useCookies } from "react-cookie";
import { logoutUserAsync } from "../../services/asyncActions/auth";
import { logoutAction } from "../../services/actions/auth";

const ProfileNavigation:FunctionComponent = () => {
    const token = useSelector((store:IRootState) => store.authReducer.accessToken);
    const refreshToken = useSelector((store:IRootState) => store.authReducer.refreshToken);
    const dispatch:TAppDispatch = useDispatch();
    const [cookies, setCookie, removeCookie] = useCookies<string>(['stellarBurger']);
    function logout(refreshToken: string | null) {
        if (refreshToken !== undefined || refreshToken !== null) {
            dispatch(logoutUserAsync(refreshToken))
            removeCookie('accessToken');
            removeCookie('refreshToken');
        } else {
            dispatch(logoutAction());
            removeCookie('accessToken');
            removeCookie('refreshToken');
            
        }
    }
    return (
        <nav className={styles.navigation}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to='/profile' end>Профиль</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to='/profile/orders' end>История заказов</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } onClick={() => logout(refreshToken)} to='/'>Выход</NavLink>
            </nav>
    )
}

export default ProfileNavigation;