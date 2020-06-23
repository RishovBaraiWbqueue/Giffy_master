import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search-Results.css'
import * as CustomTypes from '../../lib/CustomType'
import SearchResult from '../SearchResult/Search-Result'

export default function SearchResults({ results }) {
    return (<div className = {styles.container}>
        {results.map( (result) => <SearchResult key = {result.thumbnail} result = {result}/>)}
    </div>)
}

 SearchResults.propTypes = {
     result: PropTypes.arrayOf(CustomTypes.SearchResult )
 }