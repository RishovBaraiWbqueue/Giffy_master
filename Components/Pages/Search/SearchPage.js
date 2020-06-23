import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../../Search/SearchForm'
import SearchResults from '../../SearchResults/Search-Results.Container'
import InfiniteScroll from '../../InfiniteScroll/InfiniteScroll'

export default function Search ( {onSearchSubmit, onInfiniteScroll, isLoading, isActive}) {
  
    return ( 
        <div>
            <SearchForm onSearchSubmit = {onSearchSubmit}/>
            <InfiniteScroll isActive={isActive} isLoading = {isLoading} onTrigger = { () => onInfiniteScroll()}>
                <SearchResults />
            </InfiniteScroll>
           
        </div>
    )
}

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired
}