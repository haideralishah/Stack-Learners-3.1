import React from 'react';
import { useHistory } from 'react-router-dom';

const StudentInfo = ({ studentInfo }) => {
    const history = useHistory();

    const veiwResult = () => {
        history.push(`/student-details/${studentInfo.studentName}/${studentInfo.physicsMarks}/${studentInfo.mathsMarks}`)
    }

    return (
        <div>
            <h1>{studentInfo.studentName}</h1>
            <button onClick={veiwResult}>View Result</button>
        </div>
    )
}

export default StudentInfo;