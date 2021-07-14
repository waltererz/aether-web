import { combineReducers } from 'redux';
import app from './Reducers/App';
import layout from './Reducers/Layout';

const Reducers = combineReducers({ app, layout });

export default Reducers;
