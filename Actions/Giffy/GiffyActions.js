import { SHOW_GIFFY_DISPLAY, HIDE_GIFFY_DISPLAY } from './GiffyActionsTypes'

export const showGiffyDisplay = giffy => {
    return {
        type: SHOW_GIFFY_DISPLAY,
        giffy
    }
}

export const hideGiffyDisplay = () => {
    return {
        type: HIDE_GIFFY_DISPLAY
    }
}