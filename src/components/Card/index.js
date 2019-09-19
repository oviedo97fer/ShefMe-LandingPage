import React from 'react';
import dotsDown from '../../assets/dotsDown.png'

import './style.css'
const Card = ({src, dots=false, title, description}) =>{

    return(
        <div style={{display: 'flex', position: 'absolute',}}>
        <div className='cardComp'>
            <img className='iconCard' src={src}/>
            <div className='cardDesc'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
        {dots? 
                <img className='dotsCard' src={dotsDown} alt='dots'/>
            :
            null
            }
        </div>
    )
}

export default Card