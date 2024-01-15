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
import { Container, Row} from 'react-bootstrap';
import { Api, HP } from '../data';
import MyCard from './MyCard';



export default class GalleryHP extends Component {

  state = {
    movies: [],
};

componentDidMount() {
  fetch(Api + HP)
      .then((response) => response.json())
      .then((data) => {
          if (data.Search && Array.isArray(data.Search)) {
              this.setState({ movies: data.Search.map((movie) => movie.Poster) });
          } else {
              console.log("Struttura dati non valida o nessun risultato trovato:", data);
          }
      })
      .catch((error) => {
          console.log("Errore nella richiesta API:", error);
      });
}

render() {
  console.log(this.state.movies)
  return (
    <div>
      <h4 className='px-4 text-light'>Harry Potter</h4>
      <Container fluid className="mb-4 no-gutters text-center px-3">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
           <MyCard movies={this.state.movies} />
      </Row>  
      </Container>
    </div>
  );
}
  
};