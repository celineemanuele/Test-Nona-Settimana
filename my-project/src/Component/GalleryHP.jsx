/*import React from 'react'
import { Component, React } from 'react'

export default class MyCard extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getMovies
        
    }

    getMovies = () => {
        fetch(Api + HP)
        .then(response => response.json())
        .then(json => this.setState({movies : json.Search.map((movie) => movie.Poster)}))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <>
            <h3 className="2ms-2 mt-3">Harry Potter</h3>
            <MyCard movies ={this.state.movies} />
            </>
        )
    }

}*/

import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Api, HP } from '../data';
import MyCard from './MyCard';



export default class GalleryHP extends Component {

  state = {
    movies: [],
};

componentDidMount() {
    fetch(Api + HP)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search.map((movie) => movie.Poster) }))
        .catch((error) => console.log(error));
}

render() {
  console.log(this.state.movies)
  return (
    <div>
      <h4 className='px-4 text-light text-start'>Harry Potter</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <div>
           <MyCard movies={this.state.movies} />
        </div>
      </Container>
    </div>
  );
}
  
};