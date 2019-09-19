import React from 'react';
import dotsDown from '../../assets/dotsDown.png'

import './style.css'

const Card = ({src, dots, title, description}) =>{

    return(
        <div className='Card'>
            <div className='container'>
                <div>
                    <img className='iconCard' src={src}/>
                    <div className='cardText'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            {dots? 
            <img className='dotsCard' src={dotsDown} alt='dots'/>
            : null}
        </div>
    )
}

export default Card