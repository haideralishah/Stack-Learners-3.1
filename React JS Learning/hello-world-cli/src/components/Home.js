import React from 'react';
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();
    const goToAboutWithParam = () => {
        setTimeout(() => {
            history.push('/about/2655');
        }, 500)
    }
    
    return (
        <div>
            {/* <Link to="/about">View Result</Link> */}

            <button onClick={goToAboutWithParam}>Go to About with Param</button>
            <h1>Hello Home Page</h1>
        </div>
    )
}

export default Home;