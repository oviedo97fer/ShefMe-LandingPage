import React from 'react'

import food2 from '../../assets/food2.png'
import close from '../../assets/close.svg'
import './style.css'
import {connect} from 'react-redux'

//mailchimp
import Mailchimp from 'react-mailchimp-form'

class FormModal extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: ''
        }
    }
    onChangeName = (input) =>{
        this.setState({name: input.target.value})
    }
    onChangeMail = (input) =>{
        this.setState({email: input.target.value})
    }
    render(){
        const {showFormModal,handleToggle} = this.props;
        const url = 'https://shefme.us20.list-manage.com/subscribe/post?u=700c330f62d6eb3d56d8f6de5&amp;id=e4dc5a3133'
        return( 
            <div className={showFormModal? 'FormModalComp' : 'FormModalComp no-show'}>
                <img onClick={handleToggle} className='closeBtn' src={close} alt='closebutton'/>
                <img className='foodBackground' src={food2  } alt='shefme food plate topview'/>
                <h4>Dejanos tus datos.<br/>Nosotros te contactamos</h4>

                <Mailchimp 
                    action={url}
                    fields={[
                        {
                            name: 'FNAME',
                            placeholder: 'Nombre',
                            type: 'text',
                            required: false
                        },
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: false
                        }
                    ]}
                    messages = {
                        {
                          sending: "Enviando...",
                          success: "Gracias por dejarnos tus datos! Nos contactaremos con vos",
                          error: "Ya estás registrado! Nos contactaremos con vos",
                          empty: "Mm, no escribiste ningún correo",
                          duplicate: "Ya estás registrado! Nos contactaremos con vos",
                          button: "Registrarme"
                        }
                      }
                    className='FormModalContain'
                    buttonClassName='buttonForm'
                />
                {/* <form className='FormModalContain'>
                    <input onChange={this.onChangeName} type="text" name="name" placeholder='Nombre'/>
                    <input onChange={this.onChangeMail} type="email" name="_replyto" placeholder='Email'/>
                    <input onClick={this.postContactMailChimp} type="submit" value="Enviar"/>
                </form> */}
            </div>)
    }
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