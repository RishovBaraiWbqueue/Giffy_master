import { connect } from 'react-redux'
import SearchResults from './Search-Results'
import {showGiffyDisplay} from '../../Actions/Giffy/GiffyActions'

const mapStateToProps = state => {
    return {
        results: state.search.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showGiffy: result => dispatch(showGiffyDisplay(result))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)