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

    render() {
        console.log('this is render method');
        return (
            <div>
                <StudentBasicInfo studentInfo={basicData} />
                <TeacherRemarks remarks={basicData} />
                <Counter />
            </div>
        )
    }
}

export default Student;