import React, {Component} from 'react'
import Movie from './movie'

class Movies extends Component {

    render() {
        const {movies} = this.props
        return (
            <div>
                {
                    movies.map(  (movie, index) => <Movie key={index} movie={movie} />)
                    
                }

            </div>
        )
    }
}

export default Movies