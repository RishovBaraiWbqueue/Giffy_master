import { GET_RANDOM_GIFFY, GET_RANDOM_GIFFY_SUCCESS,GET_RANDOM_GIFFY_ERROR } from './RandomActionTypes'


export const getRandomGiffy = () => ({ type: GET_RANDOM_GIFFY }) 

export const getRandomGiffySuccess = giffy => ({ 
    type: GET_RANDOM_GIFFY_SUCCESS,
    giffy
})

export const getRandomGiffyError = () => ({ type: GET_RANDOM_GIFFY_ERROR})
