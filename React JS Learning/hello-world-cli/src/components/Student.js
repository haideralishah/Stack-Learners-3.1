import React, { Component } from 'react';
import StudentBasicInfo from './Studentbasicinfo';
import TeacherRemarks from './TeacherRemarks';
import Counter from './Counter';
var basicData = {
    name: 'Wasim Akram',
    rollNumber: 2643,
    courseName: "JavaScript",
    status: 'good'
}


class Student extends Component {
    state = {
        showCounter: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showCounter: false })
        }, 3000)
    }
    render() {
        console.log('this is render method');
        return (
            <div>
                <StudentBasicInfo studentInfo={basicData} />
                <TeacherRemarks remarks={basicData} />
                {
                    this.state.showCounter ?
                        <Counter /> :
                        null
                }
            </div>
        )
    }
}

export default Student;