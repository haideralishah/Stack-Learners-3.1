import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookAppointment } from '../Store/action/appointment'
const AppointmentBook = () => {
    const user = useSelector(({ auth }) => auth.user)
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(user.userName);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [dateStr, setDateStr] = useState('2020-10-11');
    const [timeStr, setTimeStr] = useState('10:00');
    const bookAppointmentFunc = () => {
        let appointment = {
            userName, phoneNumber, date: dateStr, time: timeStr, uid: user.uid
        }
        console.log(appointment);
        dispatch(bookAppointment(appointment));
    }

    return (
        <div>
            <h1>Welcome {user.userName}</h1>
            <label>User Name: <input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} /></label><br />
            <label>Phone Number: <input type="text" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} /></label><br />
            <label>Appointment Date: <input type="date" value={dateStr} onChange={(event) => { setDateStr(event.target.value) }} /></label><br />
            <label>Appointment Time: <input type="time" value={timeStr} onChange={(event) => { setTimeStr(event.target.value) }} /></label><br />

            <button onClick={bookAppointmentFunc}>Book Appointment</button>
        </div>
    )
}

export default AppointmentBook;