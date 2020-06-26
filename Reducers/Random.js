import { GET_RANDOM_GIFFY_SUCCESS } from '../Actions/Random/RandomActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'


const initialState = {
    giffy: null
}


function transformRandomGiffyResult (result ) {
    const { images } = result
    return {
        full: images.original.url,
        thumbnail: images.fixed_width_downsampled.url
    }
}

export default function ( state, action) {
    if( state === undefined) {
        return initialState
    }

    switch(action.type) {

        case GET_RANDOM_GIFFY_SUCCESS : return {
            ...state,
            giffy: transformRandomGiffyResult(action.giffy)
        }
        case LOCATION_CHANGE : return {
            initialState
        }
        default: return state
    }
}