import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './../css/Users.css';


function Users() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch('/users').then(
            res => res.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data)
            }
        )
    }, [])

    const users = backendData.map(
        user => 
            <div className='user'>
                <b>Name: </b> {user.name} <br/>
                <b>Surname: </b> {user.surname} <br/>
                <b>Email: </b> {user.email} <br/>
                <b>Phone number: </b> {user.phoneNumber} <br/>
                <b>Adress: </b> {user.address} <br/>
                <b>Role: </b> {user.role} <br/>
                <b>Create at: </b> {user.updatedAt} <br/>
                <b>Update At: </b> {user.updatedAt} <br/>
                <b>Bookings: </b>
            </div> 
        )

    return (
        <div className="frame">
            <Menu />

            <div >
                {backendData.length > 0 ? <div className='users'>{users}</div>: "Brak urzytkownikow"}
            </div>
        </div>
    );
  }

export default Users