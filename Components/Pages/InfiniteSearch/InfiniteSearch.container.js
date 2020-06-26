import { connect } from 'react-redux'
import { newSearch,searchPerformed } from '../../../Actions/Search/SearchActions'


const mapStateToProps = state => {
    return{
        isLoading: state.search.isLoading,
        isActive: state.search.isActive
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onSearchSubmit: searchTerm => {
            dispatch(newSearch(searchTerm))
            dispatch(searchPerformed())
    },
    onInfiniteScroll: () => {
        dispatch(searchPerformed())
    }
}
}


export default connect(mapStateToProps, mapDispatchToProps)