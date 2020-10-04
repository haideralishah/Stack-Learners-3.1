import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signupUser } from '../Store/action/auth';
const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const signup = () => {
        let user = {
            userName,
            email,
            password,
            phoneNumber
        }
        console.log(user);
        dispatch(signupUser(user));
        reIntializeStates();
    }
    const reIntializeStates = () => {
        setUserName('');
        setPassword('');
        setPhoneNumber('');
        setEmail('');
    }
    return (
        <div>
            <h1>signup</h1>
            <label>
                User Name:
                <input type="text" value={userName}
                    onChange={(event) => { setUserName(event.target.value) }}
                />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="text" value={phoneNumber}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                />
            </label>

            <button onClick={signup}>Signup</button>
        </div>
    )

}

export default Signup;
