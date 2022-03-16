import React, { Component } from "react";
import Emoji from "./emoji";
import { Col } from "react-bootstrap";



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
      <article>
        <h2>{this.props.title}</h2>
        <img src= {this.props.imageUrl} title={this.props.title} onClick={this.handleClick} alt={this.props.title} />
        <p>{this.props.description}</p>
        <button onClick={ this.handleClick}><Emoji emoji="partying-face"/></button><span>Favorites:{this.state.forever}</span>
      </article>

    )
  }
}
export default Beast;