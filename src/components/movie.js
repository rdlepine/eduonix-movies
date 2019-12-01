import React, {Component} from 'react'

class Movie extends Component {

    render() {

        const {movie} = this.props

        return (
            <div className="card" >
                <h2 className="title" >{movie.title}</h2>
                <h3>{movie.subtitle}</h3>
                <p className="description">{movie.description}</p>
                <img className="movie-image" src={movie.image} alt="Movie Logo" />
                <h5>Rated: {movie.rating}</h5>
            </div>
        )
    }

}

export default Movie