import React from 'react'
import PropTypes from 'prop-types'
import NavigationItem from '../Navigation-Item/Navigation-Item'
import styles from './Navigation.css'



export default function Navigation({ pages, navigate, currentPath }) {
    const items = pages.map(
        ({ path, title }) => (
            <NavigationItem
                key={path}
                path={path}
                onClick={navigate}
                isCurrent = { path === currentPath}>
                {title}
            </NavigationItem>
        )
    )

    return (
        <div className = {styles.container}>{items}</div>
    )

}

Navigation.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape(
            {
                path: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            }
        )).isRequired,
    navigate: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired
}