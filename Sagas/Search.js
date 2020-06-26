import axios from 'axios'
import { put, call, select} from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'
import { searchSuccess, searchError } from '../Actions/Search/SearchActions';
import { SEARCH_PERFORMED } from '../Actions/Search/SearchTypes'

    const apiKey = '15qKrZLODkTuBrDo0tOToEF0OYgdh1rv'

    const selectSearchState = state => state.search

    /*Generation functtion for Sagas*/
    function* doSearch() {
        try {
            const { currentOffSet, searchTerm } = yield select(selectSearchState)
            
            const params = {
                apiKey,
                q:searchTerm,
                limit:50,
                offset: currentOffSet
            };
            
            let endPoint;
            
            if (searchTerm === undefined ){
                 endPoint = 'trending'
            }
            else {
                 endPoint = 'search'
                params.q = searchTerm
            }
           
            const searchResult = yield call(
                
                axios.get,
                `http://api.giphy.com/v1/gifs/${endPoint}`,
                {
                    params,
                }
            );
            
            yield put(searchSuccess(searchResult.data.data))
        } catch (e) {
            yield put(searchError())
        }
       
    }

    /* Hooked doSearch with SEARCH_PERFOMRED ACTION */
    export default function* () {
        yield takeLatest(SEARCH_PERFORMED , doSearch)
    }