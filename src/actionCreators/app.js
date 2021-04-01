import {
    GET_CURRENCIES_PENDING,
    GET_CURRENCIES_FULFILLED,
    GET_CURRENCIES_REJECTED,
    GET_HISTORY_PENDING,
    GET_HISTORY_FULFILLED,
    GET_HISTORY_REJECTED
} from '../actions/app'

const api = 'http://api.exchangeratesapi.io/v1/';
const cors = process.env.REACT_APP_API_CORS;
const licence = `access_key=${process.env.REACT_APP_LICENCE_KEY}`;

export const fetchCurrencies = () => {
    return (dispatch) => {

        dispatch({ type: GET_CURRENCIES_PENDING });
        return fetch(`${cors}${api}latest?${licence}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
                else {
                    const error = new Error()
                    throw error
                }
            })
            .then((responseData) => dispatch({
                type: GET_CURRENCIES_FULFILLED,
                payload: responseData
            }))
            .catch((error) => dispatch({
                type: GET_CURRENCIES_REJECTED,
                payload: error
            }));
    }
}

export const fetchHistory = () => {
    return (dispatch) => {

        const dayOfWeek = new Date().getDay();

        //substract days to get Monday from former week
        const substractDays = dayOfWeek ? dayOfWeek + 6 : 13;

        const startAt = new Date(Date.now() - substractDays * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

        dispatch({ type: GET_HISTORY_PENDING });
        return fetch(`${cors}${api}${startAt}?${licence}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
                else {
                    const error = new Error()
                    throw error
                }
            })
            .then((responseData) => dispatch({
                type: GET_HISTORY_FULFILLED,
                payload: responseData
            }))
            .catch((error) => dispatch({
                type: GET_HISTORY_REJECTED,
                payload: error
            }));
    }
}