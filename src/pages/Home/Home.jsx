import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

import TitleCard from '@elements/TitleCard/TitleCard';

const Home = () => {
  return (
    <>
        <TitleCard
            title={'🔮Quartz Quest🔮'}
        >
            <h2>~ WIP ~</h2>
            <h2>Link to a placeholder page <Link to="/Placeholder">here</Link>!</h2>
        </TitleCard>

        {/* Image may only work locally and not on gh pages */}
        <img className='floating-logo' src="QuartzQuest/images/logo192.png" alt="Quartz Quest Logo"/>
    </>
  )
}

export default Home