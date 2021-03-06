import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_IMG, USER_UDID, USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from './types'

export const userLoginReducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_REGISTER_REQUEST:
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            }
        case USER_REGISTER_FAIL:
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case USER_IMG:
            return {
                ...state,
                img: payload
            }
        case USER_UDID:
            return {
                ...state,
                udidVerified: payload
            }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}