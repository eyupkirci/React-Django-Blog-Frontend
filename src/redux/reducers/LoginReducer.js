import { LOGIN_IS_SUCCESS, LOGOUT_IS_SUCCESS } from '../actions/ActionTypes'
import InitialState from '../InitialState'

const loginReducer =  (state = InitialState.login, action) => {

    switch (action.type) {
        case LOGIN_IS_SUCCESS:
            return action.payload;

        case LOGOUT_IS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export default loginReducer