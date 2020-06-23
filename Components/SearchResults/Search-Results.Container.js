import { connect } from 'react-redux'
import SearchResults from './Search-Results'

const mapStateToProps = state => {
    return {
        results: state.search.results
    };
}

export default connect(mapStateToProps)(SearchResults)