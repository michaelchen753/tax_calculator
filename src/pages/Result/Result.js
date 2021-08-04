import React from 'react'
import Info from '../../components/Info/Info';
import Breakdown from '../../components/Breakdown/Breakdown';
import './Result.scss';
export default function Result() {
    return (
        <div className='result'>
            <div className='info__container'><Info/></div>
            <div className='breakdown__container'><Breakdown/></div>
        </div>
    )
}
