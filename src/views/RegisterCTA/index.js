import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import {connect} from 'react-redux'

import './style.css'

//comp
import RegisterComponent from '../../components/RegisterComponent'
//assets
import businessman from '../../assets/businessman.png'
import cooker from '../../assets/cooker.png'

const data = [
    {
        title:'¿Necesita un chef?',
        desc:'Ya sea un evento de amigos, una cena familiar o un evento corporativo', 
        btn:'Necesito un chef', 
        icon: businessman
    },
    {
        title:'¿Es un chef talentoso?',
        desc:'Buscamos chefs con buena trayectoria, únicos y talentosos', 
        btn:'Soy chef', 
        icon: cooker
    }
]
const RegisterCTA = ({handleToggle}) =>{
    return(
        <main className='RegisterCTAView'>
            <h1>Quiero ser parte</h1>
            <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
            <div className='RegisterContain'>
                {data.map(i=>(
                    <RegisterComponent
                        title={i.title}
                        desc={i.desc}
                        btn={i.btn}
                        icon={i.icon}
                        key={i.title}
                        toggle={handleToggle}
                    />
                ))}
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


export default connect(mapStateToProps, mapDispatchToProps)(RegisterCTA);