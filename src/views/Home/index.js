import React from 'react'
import './style.css'

import Logo from '../../components/Logo'
//assets
import food1 from '../../assets/food1.png'
const Home = () => {
    return(
        <main className='HomeView'>
            <div className='LogoComp'>
                <Logo fontSize='2.8vw'/>
            </div>
            <div className='NavHome'>
                <a className='buttonHowWork' href='#'>¿Cómo Funciona?</a>
                <a className='buttonChef' href='#'>Quiero ser chef</a>
            </div>
            <img src={food1} alt='shefme chef fooding food'/>
            <div className='HomeTitleComp'>
                <h1 className='blackTitle'>Tenés un evento.</h1>
                <h1 className='orangeTitle'>Tenés un chef privado.</h1>
                <p>Disfruta de la buena gastronomía
                en la comodidad de tu hogar</p>
            </div>
            <a className='buttonCTA' href='#'>Necesito un chef</a>
        </main>
    )
}

export default Home;