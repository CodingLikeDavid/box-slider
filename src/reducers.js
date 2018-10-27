import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import LecturesReducer from './home/reducers';

export default combineReducers({
    routing: routerReducer,
    lectures: LecturesReducer
});