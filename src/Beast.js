import React, { Component } from "react";
import Emoji from "./emoji"
import { Card, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Container} from 'react-bootstrap/'
import './Beast.css'



class Beast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    }
  }

  handleClick = () => {
    this.setState({ favorite: this.state.favorite + 1 });
  };

  render() {
    console.log(this.state)
    return (
      <Container >
        <Row>
   <Card style={{ width: '100px' }}>
    <Card.Img variant="top" src= {this.props.imgURL} />
    <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button variant="primary" onClick={ this.handleClick}>❤️Favorites:{this.state.favorite}</Button>
    </Card.Body>
    </Card> 
    </Row>
</Container>
    )
  }
}
export default Beast;


{/* <article>
  <h2>{this.props.title}</h2>
  <img src= {this.props.imgURL} title={this.props.title} onClick={this.handleClick} alt={this.props.title} />
  <p>{this.props.description}</p>
  <button onClick={ this.handleClick}>❤️ </button><span>Favorites:{this.state.favorite}</span>
</article> */}