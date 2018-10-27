import { GET_ALL_LECTURES } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALL_LECTURES:
            return {...state, lectures: action.payload};
        default:
            return state;
    }
}