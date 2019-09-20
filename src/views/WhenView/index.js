import React from 'react';
//scroll
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './style.css'
//comps
import Gallery from '../../components/Gallery'
//assets
import gourmet1 from '../../assets/gourmet1.png'
import gourmet2 from '../../assets/gourmet2.png'
import gourmet3 from '../../assets/gourmet3.png'

const WhenView = () => {
    return(
        <main className='WhenView'>
            <h1 className='WhenViewTitle'>¿En qué ocasiones?</h1>
            <div className='GalleryContainer'>
            <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                <Gallery/>
            </ScrollAnimation>
            </div>
            <div className='plateFoodBackground'></div>
            <h1 className='cocinaTitle'>Cocina Gourmet en su hogar</h1>
            <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                <div className='gourmet'>
                    <div className='gourmetTitle'>
                        <h2>Usted disfruta.<br/>Nosotros cocinamos.</h2>
                        <p>Seleccionamos a los mejores chefs del rubro para acercarte menúes exquisitos y únicos. Vos solo disfrutá.</p>
                        <a href='#'>Necesito un chef</a>
                    </div>
                    <img src={gourmet1}/>
                    <img src={gourmet2}/>
                    <img src={gourmet3}/>
                </div>
            </ScrollAnimation>
        </main>
    )
}

export default WhenView