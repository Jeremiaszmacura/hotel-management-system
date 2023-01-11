import React, {useState} from 'react';
import '../../common_styles/Form.css';
import registerStyle from './Register.module.css';
import userService from "../../services/userService";
import SnackbarMessage from "../../components/SnackbarMessage";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarAppearance, setSnackbarAppearance] = useState("error");

    const openSnackbar = (message, appearance) => {
        setSnackbarMessage(message)
        setSnackbarAppearance(appearance)
        setSnackbarOpen(true)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            openSnackbar("Hasła muszą się zgadzać", "error")
        } else {
            userService.register(
                {
                    name,
                    surname,
                    phoneNumber,
                    address,
                    email,
                    password
                })
                .then(response => {
                    openSnackbar(response, "success")
                    //navigate("/login")
                })
                .catch(error => {
                    openSnackbar(error.message, "error")
                })
        }
    }

    return (
        <div className={registerStyle.registerForm}>
            <SnackbarMessage isOpen={snackbarOpen}
                             setIsOpen={setSnackbarOpen}
                             message={snackbarMessage}
                             appearance={snackbarAppearance}
            />
            <h2>Rejestracja</h2>
            <form className="form" onSubmit={handleRegister}>
                <label className='form-label'>Imię</label>
                <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='text'
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Nazwisko</label>
                    <input
                        className='form-input'
                        type='text'
                        value={surname}
                        onChange={(e => setSurname(e.target.value))}
                    />
                </div>
                <div className="form-inputs">
                    <label className='form-label'>Numer telefonu</label>
                    <input
                        className='form-input'
                        type='text'
                        inputMode='numeric'
                        pattern="\d*"
                        value={phoneNumber}
                        onChange={(e => setPhoneNumber(e.target.value))}
                    />
                </div>
                <div className="form-inputs">
                    <label className='form-label'>Adres</label>
                    <input
                        className='form-input'
                        type='text'
                        value={address}
                        onChange={(e => setAddress(e.target.value))}
                    />
                </div>
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
                <div className='form-inputs'>
                    <label className='form-label'>Powtórz hasło</label>
                    <input
                        className='form-input'
                        type='password'
                        required={true}
                        value={confirmPassword}
                        onChange={(e => setConfirmPassword(e.target.value))}
                    />
                </div>
                <button type='submit'>
                    Zapisz
                </button>
            </form>
        </div>
    );
}

export default Register;
