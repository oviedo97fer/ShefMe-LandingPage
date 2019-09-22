import React from 'react';

import './style.css';


const RegisterComponent = ({title, desc, btn, icon}) => {
    return(
        <div className='RegisterComponent'>
            <img src={icon}/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a onClick={()=>alert('gola')}>{btn}</a>
        </div>
    )
}

export default RegisterComponent