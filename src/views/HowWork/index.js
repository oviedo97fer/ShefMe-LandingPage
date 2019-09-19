import React from 'react';
//comps
import Card from '../../components/Card'
import './style.css';
//asset
import menu from '../../assets/menu.png'

//scroll
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const HowWork = () =>{
    return(
        <main className='HowWorkView'>
            <div className='storyLineContainer'>
                <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                    <Card src={menu} title='Elija el menú a medida' description='Tenemos una amplia variedad de menúes gourmet para que elija' dots={true}/>
                </ScrollAnimation>
            </div>
            

        </main>
    )
}

export default HowWork