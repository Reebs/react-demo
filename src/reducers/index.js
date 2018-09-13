import {combineReducers } from 'redux';
import ShowsReducer from './shows-reducer';
import BandSelected from './reducer_band_selected'

const rootReducer = combineReducers({
    shows: ShowsReducer,
    bandSelected: BandSelected
});

export default rootReducer;