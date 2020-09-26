import React, { useState } from 'react';
import StudentInfo from './StudentInfo';

const RegisterStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [mathsMarks, setMathsMarks] = useState('');
    const [physicsMarks, setPhysicsMarks] = useState('');
    const [registeredStudent, setRegisteredStudent] = useState([]);

    const registerStudent = () => {
        let student = { studentName, rollNumber, mathsMarks, physicsMarks };
        let registeredStudentClone = registeredStudent;

        registeredStudentClone.push(student);
        setRegisteredStudent(registeredStudentClone);
        console.log(registeredStudentClone);

        setStudentName('');
        setRollNumber('');
        setMathsMarks('');
        setPhysicsMarks('');
    }

    return (
        <div>
            <h1>Students Registeration</h1>
            Student Name: <input type="text" value={studentName} onChange={(event) => { setStudentName(event.target.value) }} />
            Roll Number: <input type="text" value={rollNumber} onChange={(event) => { setRollNumber(event.target.value) }} />
            Maths Marks: <input type="text" value={mathsMarks} onChange={(event) => { setMathsMarks(event.target.value) }} />
            Physics Marks: <input type="text" value={physicsMarks} onChange={(event) => { setPhysicsMarks(event.target.value) }} />
            <button onClick={registerStudent}>Register Student</button>
            {
                registeredStudent.map((student, index) => {
                    return <StudentInfo key={student.rollNumber + index} studentInfo={student} />
                })
            }
        </div>
    )
}

export default RegisterStudent;