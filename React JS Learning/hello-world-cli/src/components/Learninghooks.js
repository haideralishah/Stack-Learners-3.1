import React, { useState, useEffect } from 'react';

const LearningHooks = () => {
    const [count, setCount] = useState(0);
    const [userName, setUsername] = useState('haider');
    const updateCounter = () => {
        let countClone = count;
        countClone++;
        setCount(countClone);
    }

    useEffect(() => {
        console.log('run on every update');
        document.title = `${count} times button pressed`;
    });


    useEffect(() => {
        console.log('run when username updates');
    }, [userName]);

    useEffect(() => {
        console.log('Count changed');
    }, [count]);

    useEffect(() => {
        console.log('runs only on first time');
    }, []);


    return (
        <React.Fragment>
            <h1>{count} {userName}</h1>
            <input type="text" onChange={(event) => { setUsername(event.target.value) }} value={userName} />
            <button onClick={updateCounter}>Update Counter</button>
        </React.Fragment>
    )
}
export default LearningHooks;
// run on every update
// run on specific state change
// run only first time