import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../Form/updateAction';
import { Link } from 'react-router-dom';
import './Info.scss';

export default function Info(props) {
    const { state } = useStateMachine(updateAction);
    const {country, year, income } = state;
    return (        
        <div className='info'>
            <h2>Your tax results</h2>
            <span>Select your country of residence*:</span>
            <h3>{country}</h3>
            <span>Select an income year*:</span>
            <h3>{year}</h3>
            <span>Enter your total taxable income for the income year*</span>
            <h3>${income}</h3>
            <Link to='/'>Go back to previous screen</Link>
        </div>      

    )
}
