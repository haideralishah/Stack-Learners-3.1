import React, { useEffect, useState } from 'react';

const UserInput = (props) => {
    let [userName, setUserName] = useState('Haider');
    let [fathersName, setFathersName] = useState('Shah');
    let [rollNumber, rollNumber] = useState('Haider');
    let [userName, setUserName] = useState('Haider');

    return (
        <div>
            <label>Student Name:-<input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} /></label>
            <p>{userName}</p>
        </div>
    )
}


export default UserInput;