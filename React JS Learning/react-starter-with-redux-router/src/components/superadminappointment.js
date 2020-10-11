import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAppointmentsEveryUser } from '../Store/action/appointment'
import { logout } from '../Store/action/auth'
import AppointmentListing from './appointmentlisting';

const SuperAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllAppointmentsEveryUser());
    }, []);

    return (
        <div>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
            <AppointmentListing />
        </div>
    )
}

export default SuperAdmin;