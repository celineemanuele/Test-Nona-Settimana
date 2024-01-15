import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Api, SW } from '../data';
import MyCard from './MyCard';



export default class GallerySV extends Component {

  state = {
    movies: [],
};

componentDidMount() {
    fetch(Api + SW)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search.map((movie) => movie.Poster) }))
        .catch((error) => console.log(error));
}

render() {
  console.log(this.state.movies)
  return (
    
    <div>
      <h4 className='px-4 text-light'>Star Wars</h4>
      <Container fluid className="mb-4 no-gutters text-center px-3">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
           <MyCard movies={this.state.movies} />
        </Row>  
      </Container>
    </div>
  );
}
  
};