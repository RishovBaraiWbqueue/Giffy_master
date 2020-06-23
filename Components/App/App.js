import React from 'react'
import Navigation from '../Navigate/Navigation.container'
import styles from './App.css'

export default ({ children }) => (
    <div>
      <h1 className = {styles.header}>Giffy Master</h1>
      <Navigation />
      {children}
    </div>

);