import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';



import { useParams } from 'react-router-dom';

const About = () => {
    const { rollnumber } = useParams();

    console.log(`Roll Number: ${rollnumber}`);

    return <h1>Hello About Page</h1>
}
export default About;



// class About extends Component {
//     render() {
//         let { rollnumber } = this.props.match.params;
//         console.log(rollnumber, 'rollNumberrollNumber')
//         setTimeout(() => {
//             this.props.history.push('/story')
//         }, 2000)
//         return <h1>Hello About Page</h1>
//     }
// }

// export default withRouter(About);