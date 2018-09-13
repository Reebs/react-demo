// State argument is not application state, only the state
// this reducer is responsible for
export const BAND_SELECTED_FULFILLED = "BAND_SELECTED_FULFILLED";
export default function(state = {banner: "We Love Rock and Roll!"}, action) {
    switch (action.type) {
        case BAND_SELECTED_FULFILLED:
            return Object.assign({}, state,
                {bandName: action.payload.bandName, bandImage: action.payload.bandImage, banner: action.payload.bandName}
            )
        default:
            return state
    }
}