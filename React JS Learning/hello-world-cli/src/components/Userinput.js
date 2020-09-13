import React, { useState } from 'react';

const UserInput = (props) => {

    let [userName, setUserName] = useState('Ali');

    return (
        <div>
            <label>
                Student Name:-<input type="text" value={userName}
                    onChange={(event) => { setUserName(event.target.value) }} />
            </label>
            <p>{userName}</p>
        </div>
    )
}


export default UserInput;