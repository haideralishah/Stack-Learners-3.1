import React, { useState, useEffect } from 'react';
import UserAppointment from '../components/userappointment';
import SuperAdminAppointment from '../components/superadminappointment';
import { useSelector } from 'react-redux';

const AppointmentBook = () => {
    const user = useSelector(({ auth }) => auth.user);
    return (
        <div>
            {
                user.role && user.role === 'admin' ?
                    <SuperAdminAppointment /> :
                    <UserAppointment />
            }
        </div>
    )
}

export default AppointmentBook;