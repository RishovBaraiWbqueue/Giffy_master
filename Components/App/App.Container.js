import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { hideGiffyDisplay } from '../../Actions/Giffy/GiffyActions'
import App from './App'

const mapStateToProps = state => {
    return {
        GiffyDisplayShown: state.giffy.isShown,
        GiffyDisplayed: state.giffy.giffyDisplay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GiffyDisplayHide: () => dispatch(hideGiffyDisplay())
    }
}
export default withRouter( connect(mapStateToProps,mapDispatchToProps)(App) );
