import React from 'react'
import './TitleCard.css'

const TitleCard = ({title, children}) => {
  return (
    <div className='intro-card'>
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    </div>
  )
}

export default TitleCard