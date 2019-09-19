import React from 'react';
//comps
import Card from '../../components/Card'
import './style.css';
//asset
import menu from '../../assets/menu.png'
import ingredients from '../../assets/ingredients.png'
import dining from '../../assets/dining.png'
import waiter from '../../assets/waiter.png'
import soap from '../../assets/soap.png'
//scroll
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const cards = [
    {
        title: 'Elija el menú a medida',
        desc: 'Tenemos una amplia variedad de menúes gourmet para que elija',
        icon: menu,
        dots: true
    },
    {
        title: 'Nuestros chefs compran los ingredientes',
        desc: 'Seleccionan los mejores ingredientes para que disfrute del mejor menú',
        icon: ingredients,
        dots: true
    },
    {
        title: 'Ellos cocinan en su casa',
        desc: 'Preparan el menú que quiera con las herramientas que tenga',
        icon: dining,
        dots: true
    },
    {
        title: 'Sirven el menú',
        desc: 'Sus invitados serán atendidos de la mejor manera',
        icon: waiter,
        dots: true
    },
    {
        title: 'Y ellos se encargan de la limpieza',
        desc: 'Los chefs dejan todo limpio mientras usted disfruta de su familia y amigos',
        icon: soap,
        dots: false
    }
]

const HowWork = () =>{
    return(
        <main className='HowWorkView'>
            <div className='storyLineContainer'>
                {cards.map(card=>(
                    <ScrollAnimation animateIn='fadeIn'animateOnce={true} >
                        <Card src={card.icon} title={card.title} description={card.desc} dots={card.dots}/>
                    </ScrollAnimation>
                ))}
            </div>
            

        </main>
    )
}

export default HowWork