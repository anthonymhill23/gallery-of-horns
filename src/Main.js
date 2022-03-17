import React, { Component } from "react";
import Beast from "./Beast";
import hornedarray from "./Provided.json"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import data from "./Provided.json"
import "./App.css"
import { Modal } from "./Modal";


class Main extends Component {
    render() {
        let beast = []
        this.props.data.forEach((hornedBeast, index) => {
            beast.push(
                <Container>
                    <Beast
                        imgURL={hornedBeast.image_url}
                        title={hornedBeast.title}
                        description={hornedBeast.description}
                        keyword={hornedBeast.keyword}
                        key={index}

                    />
                </Container>
            )
        });
        return (
            <main>
                {beast}
            </main>
        )
    }


}
export default Main