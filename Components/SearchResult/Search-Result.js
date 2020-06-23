import React from 'react'
import * as CustomTypes from '../../lib/CustomType'

export default function SearchResult({ result }) {

    const { thumbnail } = result;
    return(
    <div>
        <img  src = {thumbnail} />
    </div>)
}

SearchResult.prototype = {
    result: CustomTypes.SearchResult.isRequired
};