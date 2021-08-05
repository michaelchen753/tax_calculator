import React from 'react';
import Picture from '../../components/Picture/Picture';
import Form from '../../components/Form/Form';
import './Home.scss';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__pic'><Picture/></div>
            <div className='home__cal'><Form/></div>
        </div>
    )
}
