import {getBandInfo} from '../components/api'
import {BAND_SELECTED_FULFILLED} from "../reducers/reducer_band_selected";

export function selectBand(band, dispatch) {
    // selectBand is an ActionCreator, it needs to return an action,
    // an object with a type property.
    getBandInfo(band).then(
        function (response) {
           dispatch({type: BAND_SELECTED_FULFILLED, payload: {bandImage: response.data.image_url, bandName: response.data.name}})
        }
    )
    return {
        type: "BAND_SELECTED",
        payload: band
    };
}