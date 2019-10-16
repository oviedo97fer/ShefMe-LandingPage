import React from 'react'

import food2 from '../../assets/food2.png'
import close from '../../assets/close.svg'
import './style.css'
import {connect} from 'react-redux'

class FormModal extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: ''
        }
    }

    postContactMailChimp = (e) => {
        e.preventDefault()
        let data = {
            email_address: this.state.email,
            status: "subscribed",
            merge_fields: {
                "FNAME": this.state.name,
                "LNAME": ""
            }
        }
        let authBtoa = btoa('shefme:3399ac35719591975c7f5c9bfcd70ea4-us20')
        let auth = 'Basic ' + authBtoa
        let url = 'https://us20.api.mailchimp.com/3.0/lists/e4dc5a3133/members'
        let options  = {
            method: 'POST',
            headers: {
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data),
        }
        fetch(url,options).then(ok=>console.table(ok)).catch(err=>console.error(err))
    }

    onChangeName = (input) =>{
        this.setState({name: input.target.value})
    }
    onChangeMail = (input) =>{
        this.setState({email: input.target.value})
    }
    render(){
        const {showFormModal,handleToggle} = this.props;
        return( 
            <div className={showFormModal? 'FormModalComp' : 'FormModalComp no-show'}>
                <img onClick={handleToggle} className='closeBtn' src={close} alt='closebutton'/>
                <img className='foodBackground' src={food2  } alt='shefme food plate topview'/>
                <h4>Dejanos tus datos.<br/>Nosotros te contactamos</h4>
                <form className='FormModalContain'>
                    <input onChange={this.onChangeName} type="text" name="name" placeholder='Nombre'/>
                    <input onChange={this.onChangeMail} type="email" name="_replyto" placeholder='Email'/>
                    <input onClick={this.postContactMailChimp} type="submit" value="Enviar"/>
                </form>
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