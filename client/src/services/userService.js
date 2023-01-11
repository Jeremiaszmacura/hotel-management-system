import doFetch from "./doFetch";
import {hasSelectionSupport} from "@testing-library/user-event/dist/utils";

const API_URL = "http://localhost:4000/users/";

const login= (authentication) => {
    return doFetch(API_URL + "login", "POST", authentication)
        .then(response => {
            if (!response.ok) {
                throw Error('Błędne żądanie!');
            }
            return response.json();
        })
}

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

const register = (userData) => {
    return doFetch(API_URL + "signup", "POST", userData)
        .then(response => {
            if (!response.ok) {
                throw Error('Błędne żądanie!');
            }
            return response.json();
        })
}

const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
};

const getUserId = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user) {
        return user._id
    } else {
        return null
    }
}

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('token'));

    if (user && user.jwt) {
        return 'Bearer ' + user.jwt;
    } else {
        return '';
    }
};

export default {
    login,
    logout,
    register,
    getToken,
    getUserId,
    authHeader
};