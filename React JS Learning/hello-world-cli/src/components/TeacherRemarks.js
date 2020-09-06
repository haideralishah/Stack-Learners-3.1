import React from 'react';

const TeacherRemarks = (props) => {
    const { remarks } = props;
    const { name, status } = remarks;
    console.log("render called in student teacher remarks")
    return (
        <p style={styleSheet.p}>
            <span style={styleSheet.span}>Teacher Remarks: </span>
            {name} is {
                ['a', 'e', 'i', 'o', 'u'].indexOf(status[0]) != -1 ? <span>an</span> : <span>a</span>
            }
            {status} student.
        </p>
    )
}

const styleSheet = {
    p: {
        textAlign: "center"
    },
    span: {
        fontWeight: 'bold'
    }
}

export default TeacherRemarks;