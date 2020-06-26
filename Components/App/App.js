import React from 'react'
import Navigation from '../Navigate/Navigation.container'
import styles from './App.css'
import GiffyDisplay from '../Giffy-Display/Giffy-Display'
import PropTypes from 'prop-types'
import { SearchResult } from '../../lib/CustomType'


const App =  ({ children, GiffyDisplayed, GiffyDisplayShown, GiffyDisplayHide }) => (
    <div>
      <h1 className = {styles.header}>Giffy Master</h1>
      <Navigation />
      {children}
      <GiffyDisplay isShown = {GiffyDisplayShown} onClick = {GiffyDisplayHide} giffy = {GiffyDisplayed} />
    </div>

);

App.propTypes = {
  GiffyDisplayShown: PropTypes.bool.isRequired,
  GiffyDisplayHide: PropTypes.func.isRequired,
  GiffyDisplayed: SearchResult
}

export default App;