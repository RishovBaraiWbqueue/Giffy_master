import Random from  './RandomPage'
import { connect } from 'react-redux'
import {  showGiffyDisplay } from '../../../Actions/Giffy/GiffyActions'
import { getRandomGiffy } from '../../../Actions/Random/RandomAction'

const mapStateToProps = state => ({
    giffy: state.random.giffy
})

const mapDispatchToProps = dispatch => ({
    thumbnailClicked: giffy => dispatch(showGiffyDisplay(giffy)),
    getRandomGiffy: () => dispatch(getRandomGiffy())
}) 


export default connect(mapStateToProps,mapDispatchToProps)(Random)