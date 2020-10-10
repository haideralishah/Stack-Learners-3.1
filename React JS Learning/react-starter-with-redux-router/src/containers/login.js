import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { signin } from '../Store/action/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signinUser = () => {
        let user = {
            email,
            password,
        }
        dispatch(signin(user));
        reIntializeStates();
    }
    const reIntializeStates = () => {
        setPassword('');
        setEmail('');
    }

   

    return (
        <div>
            <h1>Signin</h1>

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


            <button onClick={signinUser}>Signin</button>
        </div>
    )

}
export default Login;
