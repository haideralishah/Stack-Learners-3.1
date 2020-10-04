import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserName, toggleBulb } from '../Store/action/auth';
const UserName = () => {
    const [userNameState, setUserNameState] = useState('');
    const userName = useSelector(({ auth }) => auth.userName);
    const bulb = useSelector(({ auth }) => auth.bulb);
    const dispatch = useDispatch();
    const updateUserName = () => {
        dispatch(changeUserName(userNameState))
        setUserNameState('');
    }





    return (
        <div>
            <button
                style={{ backgroundColor: bulb ? 'yellow' : 'white' }}
                onClick={() => { dispatch(toggleBulb()) }}>{bulb ? 'On' : 'Off'}</button>


            <h1>User Name: {userName}</h1>
            <input type="text"
                value={userNameState}
                onChange={(event) => { setUserNameState(event.target.value) }}
            />
            <button onClick={updateUserName}>Update User</button>
        </div>)
}

export default UserName;
