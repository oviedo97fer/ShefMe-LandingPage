import React from 'react'

import food2 from '../../assets/food2.png'
import close from '../../assets/close.svg'
import './style.css'
import {connect} from 'react-redux'
const FormModal = ({showFormModal,handleToggle}) =>{
        return( 
            <div className={showFormModal? 'FormModalComp' : 'FormModalComp no-show'}>
                <img onClick={handleToggle} className='closeBtn' src={close} alt='closebutton'/>
                <img className='foodBackground' src={food2  } alt='shefme food plate topview'/>
                <h4>Dejanos tus datos.<br/>Nosotros te contactamos</h4>
                <form className='FormModalContain' action="https://formspree.io/shefme.oke@gmail.com" method="POST">
                    <input type="text" name="name" placeholder='Nombre'/>
                    <input type="email" name="_replyto" placeholder='Email'/>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>)
}

const mapStateToProps = state => ({
    showFormModal: state.showFormModal
})

const mapDispatchToProps = dispatch => ({
    handleToggle(){
        dispatch({
            type: 'TOGGLE_MODAL',
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(FormModal)