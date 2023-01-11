import navStyle from './Navbar.module.css';
import {Link, useNavigate, useLocation} from "react-router-dom";
import userService from "../../services/userService";
import classNames from "classnames";
import * as BiIcons from 'react-icons/bi';
import {useEffect, useState} from "react";
import sideMenuData from "../../services/sideMenuData";
import useFetch from "../../services/useFetch";

const Navbar = () => {
    const USER_URL = "http://localhost:4000/users/";

    const [loggedUser, setLoggedUser] = useState(null);
    const [menuData, setMenuData] = useState(sideMenuData(loggedUser))
    const currentPath = useLocation()
    const history = useNavigate();

    const {data: userData, error: userDataError, reFetch: reFetchUserData}
        = useFetch(USER_URL + userService.getUserId(), {method: 'GET', headers: {Authorization: userService.authHeader()}});

    useEffect(() => {
        const token = userService.getToken()
        setLoggedUser(token)
        setMenuData(sideMenuData(token))
    }, [currentPath])

    const logout = () => {
        userService.logout();
        setLoggedUser(null);
        history.push("/login")
    }

    return (
        <div className={classNames(navStyle.navbar, navStyle.active)}>
            <div>
                <img src={"images/logo.png"}/>
            </div>
            <nav className={navStyle.navMenu}>
                <ul className={navStyle.navMenuItems}>
                    <li className={navStyle.welcome}>
                        {loggedUser && `Witaj ${userData.name} ${userData.surname}`}
                    </li>
                    {menuData.map((item, index) => {
                        return (
                            <li key={index}
                                className={classNames(navStyle.navText, `${currentPath.pathname === item.path ? navStyle.navTextActive : ""}`)}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    {loggedUser &&
                        <li className={navStyle.navText}>
                            <Link to="/login" onClick={() => logout()}>
                                <BiIcons.BiLogOut size={25}/>
                                <span>Wyloguj się</span>
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
