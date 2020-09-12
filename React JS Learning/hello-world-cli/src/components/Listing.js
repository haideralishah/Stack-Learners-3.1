import React, { Component } from 'react';
import InputForm from './InputForm';

class Listing extends Component {
    state = {
        favFruits: ['Apple', "Banana", 'Cherry', "Dry Fruits", "Orange"],
        students: [
            { name: 'haider', roll: 2643, status: 'pass' },
            { name: 'ali', roll: 2644, status: 'pass' },
            { name: 'Shah', roll: 2645, status: 'fail' },
            { name: 'aslam', roll: 2646, status: 'pass' },
            { name: 'akram', roll: 2647, status: 'pass' }
        ],
        studentName: '',
        rollNumber: '',
        status: ''
    }

    delete(index) {
        let studentsClone = this.state.students;
        studentsClone.splice(index, 1);
        this.setState({ students: studentsClone });
    }

    handleChange = (stateName, event) => {

        console.log(stateName, event, this)
        this.setState({
            [stateName]: event.target.value
        });
    }

    registerStudent = () => {
        let student = {
            name: this.state.studentName,
            roll: this.state.rollNumber,
            status: this.state.status
        }
        let studentsClone = this.state.students.slice(0);
        studentsClone.push(student);
        this.setState({ students: studentsClone });
    }

    render() {
        let students = this.state.students.map((student, index) => {
            return (
                <div key={student.name + index}>
                    <b>{student.name}</b>
                    <span> {student.roll}</span>
                    <span> {student.status}</span>
                    <button onClick={this.delete.bind(this, index)}>Delete</button>
                </div>
            )
        })

        return (
            <div>

                <InputForm
                    stateName={'studentName'}
                    stateValue={this.state.studentName}
                    changeHandler={this.handleChange}
                    labelName={'Student Name'}
                />

                <InputForm
                    stateName={'rollNumber'}
                    stateValue={this.state.rollNumber}
                    changeHandler={this.handleChange}
                    labelName={'Roll Number'}
                />



                <label>Status:
                    <select value={this.state.status} onChange={this.handleChange.bind(this, 'status')}>
                        <option value="Pass">Pass</option>
                        <option value="Fail">Fail</option>
                    </select>
                </label>

                <button onClick={this.registerStudent}>Register Student</button>


                <ul>
                    {/* {
                    this.state.favFruits.map((fruit, index) => {
                        return <li key={`${fruit}${index}`}>{fruit}</li>
                    })
                } */}
                    {students}
                </ul>
            </div>
        )
    }
}

export default Listing;