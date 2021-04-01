import {
    GET_CURRENCIES_PENDING,
    GET_CURRENCIES_FULFILLED,
    GET_CURRENCIES_REJECTED,
    GET_HISTORY_PENDING,
    GET_HISTORY_FULFILLED,
    GET_HISTORY_REJECTED
} from '../actions/app'

const initialState = {
    rates: [],
    history: [],
    date: null,
    currencyClicked: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES_PENDING: return {
            ...state
        }
        case GET_CURRENCIES_FULFILLED: return {
            ...state,
            rates: Object.entries(action.payload.rates).map((entry) => {
                return { name: entry[0], value: entry[1] }
            })
        }
        case GET_CURRENCIES_REJECTED: return {
            ...state
        }
        case GET_HISTORY_PENDING: return {
            ...state
        }
        case GET_HISTORY_FULFILLED: return {
            ...state,
            history: action.payload.rates
        }
        case GET_HISTORY_REJECTED: return {
            ...state
        }
        default: return {
            ...state
        }
    }
}