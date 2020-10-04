import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserName } from '../Store/action/auth';
const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(({ auth }) => auth.userName);
    const [name, setName] = useState('');
    const updateUserInStore = () => {
        dispatch(changeUserName(name))
    }
    return (
        <div>
            <h1>Home {userName}</h1>
            <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
            <button onClick={updateUserInStore}>Update User Name</button>
        </div>)
}

export default Home;
