import React from 'react'
import PropTypes from  'prop-types' 
import { SearchResult } from '../../../lib/CustomType'
import Styles from './Random.css'

export default class Random extends React.Component {

    componentDidMount() {
        this.props.getRandomGiffy()
    }

    render() {

        const { giffy, thumbnailClicked, getRandomGiffy } = this.props;

        return (
            <div className = {Styles.container}>
               <div><button className = {Styles.button} onClick = {getRandomGiffy} >Next Giffy</button></div>
               <div>
                   <a href = '#' onClick = { e => {
                       e.preventDefault(),
                       thumbnailClicked(giffy);
                   }}>
                       <img src = {giffy? giffy.thumbnail: '' } />
                   </a>
               </div>
            </div>
        )
    }
 
}

Random.propTypes = {
    giffy: SearchResult,
    thumbnailClicked: PropTypes.func.isRequired,
    getRandomGiffy: PropTypes.func.isRequired
}