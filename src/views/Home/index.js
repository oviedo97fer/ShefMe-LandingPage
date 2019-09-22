import React from 'react'
import './style.css'

import {connect} from 'react-redux'

import FormModal from '../../components/FormModal'

import Logo from '../../components/Logo'
//assets
import food1 from '../../assets/food1.png'
const Home = ({handleToggle}) => {
    return(
        <main className='HomeView'>
            <div className='LogoComp'>
                <Logo fontSize='2em'/>
            </div>
            <div className='NavHome'>
                <a className='buttonHowWork' href='#HowWork'>¿Cómo Funciona?</a>
                <a className='buttonChef' href='#' onClick={handleToggle}>Quiero ser chef</a>
            </div>
            <img src={food1} className='shefMeImg' alt='shefme chef fooding food'/>
            <div className='HomeTitleComp'>
                <h1 className='blackTitle'>Tenés un evento.</h1>
                <h1 className='orangeTitle'>Tenés un chef privado.</h1>
                <p>Disfruta de la buena gastronomía
                en la comodidad de tu hogar</p>
            </div>
            <a className='buttonCTA' onClick={handleToggle} href='#'>Necesito un chef</a>

        </main>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    handleToggle(){
        dispatch({
            type: 'TOGGLE_MODAL',
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);