import React from 'react'
import PropType from 'prop-types'
import Spinner from '../Spinner/Spinner'


export default class InfiniteScroll extends React.Component {

    constructor(props) {
        super(props)
        this.container = null
        this.scrollListener = this.scrollListener.bind(this)
    }
    

    componentDidMount() {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount () {
        document.removeEventListener('scroll',this.scrollListener);
    }
    scrollListener() {
        const { isLoading, onTrigger, isActive} = this.props
        const viewPortHeight = document.documentElement.clientHeight;
        const { bottom } = this.container.getBoundingClientRect();
        if(isActive && !isLoading && (bottom <= viewPortHeight) ) {
            //trigger
            onTrigger()
        }

    }

    render() {
        const { children,isLoading} = this.props
        return (
            <div ref = { e => this.container = e}>
                {children}
                <div>{isLoading && <Spinner/>}</div>
            </div>

        )
    }
}

InfiniteScroll.propType = {
    children: PropType.element.isRequired,
    isLoading: PropType.bool.isRequired,
    onTrigger: PropType.func.isRequired
}