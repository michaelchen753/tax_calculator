import React from 'react';
import Picture from '../../components/Picture/Picture';
import Calculator from '../../components/Calculator/Calculator';
import './Home.scss';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__pic'><Picture/></div>
            <div className='home__cal'><Calculator/></div>
        </div>
    )
}
