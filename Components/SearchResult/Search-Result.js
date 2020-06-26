import React from 'react'
import * as CustomTypes from '../../lib/CustomType'
import PropTypes from 'prop-types'

export default function SearchResult({ result, onClick }) {

    const clicked = e => {
        e.preventDefault();
        onClick()
    }
    const { thumbnail } = result;
    return(
    <div>
        <a href= '#' 
            onClick={clicked}>
            <img  src = {thumbnail} />
        </a>
        
    </div>)
}

SearchResult.prototype = {
    result: CustomTypes.SearchResult.isRequired,
    onClick: PropTypes.func
};