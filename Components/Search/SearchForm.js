import React from 'react'
import Proptypes from 'prop-types'
import styles from './Search-Form.css'

export default function SearchForm ({ onSearchSubmit }) {
    let search = null;
    const searchSubmit = e => {
        e.preventDefault() 
        onSearchSubmit(search.value)
    }
    return (
        <div>
            <form  className = {styles.container} onSubmit = {searchSubmit}>
                <input className ={styles.searchField} type = 'text' placeholder = 'Get me giphys... ' ref = { e => search = e }/>
                <input className = {styles.button} type = 'submit' value = 'search' />
            </form>
        </div>
    )
}

SearchForm.Proptypes = {
    onSearchSubmit : Proptypes.func.isRequired
}
