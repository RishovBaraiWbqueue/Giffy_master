import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search-Results.css'
import * as CustomTypes from '../../lib/CustomType'
import SearchResult from '../SearchResult/Search-Result'

export default function SearchResults({ results, showGiffy }) {
    return (<div className = {styles.container}>
        {results.map( (result) => <SearchResult key = {result.thumbnail} result = {result} onClick={ () => showGiffy(result)}/>)}
    </div>)
}

 SearchResults.propTypes = {
     results: PropTypes.arrayOf(CustomTypes.SearchResult ),
     showGiffy: PropTypes.func.isRequired

 }