import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chagneAuth } from '../Store/action/auth';
const About = () => {
    const auth = useSelector(({ auth }) => auth.auth);
    const userName = useSelector(({ auth }) => auth.userName);
    console.log(auth, 'auth')
    const dispatch = useDispatch();

    return (
        <div>
            <h1>About {userName}</h1>
            <button onClick={() => { dispatch(chagneAuth()) }}>Change Testing</button>
        </div>)
}

export default About;
