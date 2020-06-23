import * as Types from './SearchTypes'

export const searchError = error => ({
    type: Types.SEARCH_ERROR,
    error
})

export const searchSuccess = results => ({
    type : Types.SEARCH_SUCCESS,
    results
})

export const searchPerformed = () => ({
    type: Types.SEARCH_PERFORMED,
})

export const newSearch = searchTerm => ({
    type: Types.NEW_SEARCH,
    searchTerm
})