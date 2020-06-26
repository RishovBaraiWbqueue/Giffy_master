import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Styles from './Giffy-Display.css'
import * as CustomeTypes from '../../lib/CustomType'

export default function GiffyDisplay ({ isShown, giffy, onClick}) {

    const containerClassName = classNames( 
        Styles.container,
        { [Styles.isShown]: isShown }
    )
    return (
        <div className = {containerClassName} onClick = {onClick}>
            <img className = {Styles.image}    src = { giffy? giffy.full: ''} />
        </div>
    )

}

GiffyDisplay.propTypes = {
    isShown: PropTypes.bool.isRequired,
    giffy: CustomeTypes.SearchResult,
    onClick: PropTypes.func.isRequired
}