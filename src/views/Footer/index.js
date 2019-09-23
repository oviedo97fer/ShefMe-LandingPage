import React from 'react'
import {connect} from 'react-redux'
import './style.css'
//assets
import Logo from '../../components/Logo'

const Footer = ({handleToggle}) =>{ 
    return(
        <main className='FooterView'>
            <Logo fontSize='3em'/>
            <a onClick={handleToggle} className='buttonCTA buttonCTAFooter'>Quiero un chef</a>
            <a onClick={handleToggle} className='buttonChefFooter'>Ser parte</a>
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


export default connect(mapStateToProps, mapDispatchToProps)(Footer);