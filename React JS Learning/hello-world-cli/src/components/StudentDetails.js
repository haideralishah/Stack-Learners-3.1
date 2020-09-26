import React from 'react';
import { useParams } from 'react-router-dom';
const StudentDetails = () => {
    const { studentName, physicsMarks, mathsMarks } = useParams();
    console.log(studentName, physicsMarks, mathsMarks)
    let totalPercent = (Number(physicsMarks) + Number(mathsMarks)) / 200 * 100;
    return (
        <div>
            <h1>{studentName}</h1>
            <p> Maths Marks: {mathsMarks}</p>
            <p> Physics Marks:  {physicsMarks}</p>
            <p> Your total percentage is: {totalPercent} %.</p>

        </div>
    )
}

export default StudentDetails;