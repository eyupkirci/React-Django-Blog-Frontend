import {LOGIN_IS_SUCCESS, LOGOUT_IS_SUCCESS} from './ActionTypes'

export const loginAction = (data) => {
    return{
        type: LOGIN_IS_SUCCESS,
        payload: data
    }
}
export const logoutAction = () => {
    return{
        type: LOGOUT_IS_SUCCESS,
        payload: ''
    }
}