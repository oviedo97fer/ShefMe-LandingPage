import React from 'react';
import {connect} from 'react-redux'

//scroll
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './style.css'
//comps
import Gallery from '../../components/Gallery'
//assets
import gourmet1 from '../../assets/gourmet1.png'
import gourmet2 from '../../assets/gourmet2.png'
import gourmet3 from '../../assets/gourmet3.webp'

const WhenView = ({handleToggle}) => {
    return(
        <main className='WhenView'>
            <h1 className='WhenViewTitle'>¿En qué ocasiones?</h1>
            <div className='GalleryContainer'>
                <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                    <Gallery/>
                </ScrollAnimation>
            </div>
            <div className='plateFoodBackground'></div>
            <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                <div className='gourmet'>
                <h1 className='cocinaTitle'>La alta cocina en tu hogar</h1>
                    <div className='gourmetTitle'>
                        <h2>Disfruta.<br/>Nosotros cocinamos.</h2>
                        <p>Seleccionamos a los mejores chefs del rubro para acercarte menúes exquisitos y únicos.</p>
                        <a onClick={handleToggle}>Quiero un chef</a>
                    </div>
                    <img src={gourmet1}/>
                    <img src={gourmet2}/>
                    <img src={gourmet3}/>
                </div>
            </ScrollAnimation>
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


export default connect(mapStateToProps, mapDispatchToProps)(WhenView);