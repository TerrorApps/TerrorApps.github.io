/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import pokervault from "../assets/pokervaultlogo.png"
import Card from "./Card.jsx"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: "PokerVault",
          subTitle: "Poker logging app",
          imgSrc: pokervault,
          link: "",
          selected: false,
        },
      ],
    }
  }

  handleCardClick = id => {
    const items = [...this.state.items]
    items[id].selected = !items[id].selected

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false
      }
    })

    this.setState({
      items,
    })
  }

  makeItems = items => {
    return items.map(item => {
      return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
    })
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-around">{this.makeItems(this.state.items)}</Row>
      </Container>
    )
  }
}

export default Carousel
