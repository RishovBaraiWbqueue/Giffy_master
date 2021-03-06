import { SEARCH_SUCCESS,NEW_SEARCH,SEARCH_ERROR, SEARCH_PERFORMED } from "../Actions/Search/SearchTypes"
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
    results: [],
    currentOffSet: 0,
    searchTerm: null,
    isLoading: false,
    isActive: false
}

const searchResultTransformer = (rawResult) =>  {

    const { images } = rawResult;

    return {
        thumbnail: images.fixed_height_small_still.url,
        full: images.original.url,
    }
}

export default (state, action) => {

if (state === undefined) {
    return initialState
}
    switch (action.type) {
        case SEARCH_SUCCESS: return {
            ...state,
            results: state.results.concat(action.results.map(searchResultTransformer)),
            currentOffSet: state.currentOffSet + 50,
            isLoading: false,
            isActive: (action.results.length === 50)
        };
        case NEW_SEARCH: return {
            ...state,
            results: [],
            currentOffSet: 0,
            searchTerm: action.searchTerm,
        };
        case SEARCH_PERFORMED: return {
            ...state,
            isLoading: true,
        };
        case SEARCH_ERROR: return {
            ...state,
            isLoading: false,
        };
        case LOCATION_CHANGE: return{
            results: [],
            currentOffSet: 0,
            searchTerm: null,
            isLoading: false,
            isActive: false
        }
        default: return state

    }
}