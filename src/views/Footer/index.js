import React from 'react'

import './style.css'
//assets
import Logo from '../../components/Logo'

const Footer = () =>{ 
    return(
        <main className='FooterView'>
            <Logo fontSize='6vw'/>
            <a className='buttonCTA buttonCTAFooter' href='#'>Necesito un chef</a>
            <a className='buttonChefFooter' href='#'>Soy chef</a>
        </main>
    )
}

export default Footer