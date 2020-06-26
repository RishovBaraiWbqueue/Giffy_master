import { GET_RANDOM_GIFFY } from '../Actions/Random/RandomActionTypes'
import { getRandomGiffySuccess, getRandomGiffyError } from '../Actions/Random/RandomAction'
import { takeLatest } from 'redux-saga/effects'
import {call, put } from 'redux-saga/effects'
import axios from 'axios'

const apiKey = '15qKrZLODkTuBrDo0tOToEF0OYgdh1rv'

function* getRandomGiffy() {
 try {
    const randomGiffyResult = yield call(
        axios.get,
        'http://api.giphy.com/v1/gifs/random',
        {
            params: {
                apiKey
            }
        }

    );

    yield put(getRandomGiffySuccess(randomGiffyResult.data.data))

 }

 catch (_) {
     yield put(getRandomGiffyError)
 }
    
}



export default function* () {
    yield takeLatest( GET_RANDOM_GIFFY , getRandomGiffy)
}