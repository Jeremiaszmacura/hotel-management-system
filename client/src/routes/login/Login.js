import React, {useEffect, useState} from 'react';
import '../../common_styles/Form.css';
import loginStyle from './Login.module.css';
import userService from "../../services/userService";
import SnackbarMessage from "../../components/SnackbarMessage";
import {useNavigate} from "react-router-dom";
import jwt from 'jwt-decode'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarAppearance, setSnackbarAppearance] = useState("error");

    const openSnackbar = (message, appearance) => {
        setSnackbarMessage(message)
        setSnackbarAppearance(appearance)
        setSnackbarOpen(true)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        userService.login({email, password})
            .then(response => {
                if (response.token) {
                    openSnackbar("Logowanie pomyślne", "success")
                    const token = JSON.stringify(response)
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", getUser(token))
                }
                setSuccessful(true)
            })
            .catch(error => {
                openSnackbar(error.message, "error")
            })
    }

    const getUser = (token) => {
        const user = jwt(token)
        return JSON.stringify(user.user);
    }

    useEffect(() => {
        if (successful) {
            navigate("/");
        }
    }, [successful])

    return (
        <div className={loginStyle.loginForm}>
            <SnackbarMessage isOpen={snackbarOpen}
                             setIsOpen={setSnackbarOpen}
                             message={snackbarMessage}
                             appearance={snackbarAppearance}
            />
            <h2>Logowanie</h2>
            <form className="form" onSubmit={handleLogin}>
                <div className='form-inputs'>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Hasło</label>
                        <input
                            className='form-input'
                            type='password'
                            value={password}
                            required={true}
                            onChange={(e => setPassword(e.target.value))}
                        />
                    </div>
                </div>
                <button type='submit'>
                    Zaloguj się
                </button>
            </form>
        </div>
    );
}

export default Login;
