import { SHOW_GIFFY_DISPLAY, HIDE_GIFFY_DISPLAY } from "../Actions/Giffy/GiffyActionsTypes"

const initialState = {
    isShown: false,
    giffyDisplay: null,
};

export default function ( state, action ) {
    if( state === undefined ) {
        return initialState
    }

    switch(action.type) {
        case SHOW_GIFFY_DISPLAY : return {
            ...state,
            isShown: true,
            giffyDisplay: action.giffy
        }
        case HIDE_GIFFY_DISPLAY : return {
            ...state,
            isShown: false,
            giffyDisplay: null
        }
        default : return state
    }
}