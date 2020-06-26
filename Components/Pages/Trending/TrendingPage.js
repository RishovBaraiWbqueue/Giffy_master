import React from 'react'
import PropTypes from 'prop-types'
 import SearchResults from '../../SearchResults/Search-Results.Container'
import InfiniteScroll from '../../InfiniteScroll/InfiniteScroll'


export default class Trending extends React.Component{

  
   render() {
    const {onInfiniteScroll, isLoading, isActive} = this.props
    return ( 
        <div>
            <InfiniteScroll isActive={isActive} isLoading = {isLoading} onTrigger = { () => onInfiniteScroll()}>
                <SearchResults />
            </InfiniteScroll>
           
        </div>
    )
   }
   
   componentDidMount() {
    this.props.onSearchSubmit()
}

}

Trending.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired
}