import { createStore } from 'redux';

const initialState = {
    showFormModal: false
}

const reducerFormModal = (state = initialState, action) =>{
    if (action.type === 'TOGGLE_MODAL'){
        return{
            showFormModal: !state.showFormModal
        }
    } 
    return state
}
export default createStore(reducerFormModal);