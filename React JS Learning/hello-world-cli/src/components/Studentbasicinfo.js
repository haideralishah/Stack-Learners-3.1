import React, { Component } from "react";

class StudentBasicInfo extends Component {
    render() {
        const { studentInfo } = this.props;
        const { name, rollNumber, courseName } = studentInfo;
        console.log('render called in student basic info.');

        return (
            <div style={styleSheet.divContainer}>
                <h1>{name}</h1>
                <p>Roll# {rollNumber}</p>
                <p>Course Name: Learning {courseName}</p>
            </div>
        )
    }
}
const styleSheet = {
    divContainer: {
        border: "1px solid black",
        width: '70%',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
    }
}

export default StudentBasicInfo;