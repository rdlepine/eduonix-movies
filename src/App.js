import React, {Component} from 'react';

import Header from './components/header'
import Movies from './components/movies'

import './App.css';

class App extends Component {


  state = {
    movies: [
      {
        title: 'Star Wars',
        subtitle: 'A New Hope',
        description: 'A long time ago in a galaxy far away. Luke Skywalker fight the dark side',
        image: 'http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png',
        rating: 'PG'
      },
      {
        title: 'Rambo',
        subtitle: 'First Blood',
        description: 'Ex Green Beret shows small town sherif what for',
        image: 'http://pngimg.com/uploads/rambo/rambo_PNG28.png',
        rating: 'PG-13'
      },
      {
        title: 'John Wick',
        subtitle: 'Who is John Wick',
        description: 'Professional Assasin kills just about everybody',
        image: 'https://p1.hiclipart.com/preview/763/49/144/movie-icon-mega-6-john-wick-john-wick-dvd-case-png-clipart.jpg',
        rating: 'R'
      }
    ]
  }

  render() {
    const {movies} = this.state

    return (
      <div className="App">
        <Header />
        <Movies movies={movies} />
      </div>
    )
  }
  
}

export default App;
