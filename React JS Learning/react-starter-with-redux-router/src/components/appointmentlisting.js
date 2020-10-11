import React from 'react';
import { useSelector } from 'react-redux';

const AppointmentListing = () => {
    const allAppointments = useSelector(({ appointments }) => appointments.userAppointments)
    console.log(allAppointments, 'allAppointments')
    return (
        <div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Patient Name</th>
                    <th>Phone Number</th>
                </tr>

                {
                    allAppointments.map((appointment, index) => {
                        return (
                            <tr key={appointment.docId}>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.userName}</td>
                                <td>{appointment.phoneNumber}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default AppointmentListing;