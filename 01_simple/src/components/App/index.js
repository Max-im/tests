import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getNexId } from "../../utils";
import Gifts from "../Gifts";

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    this.setState({ gifts: getNexId(this.state.gifts) });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(item => item.id !== id);
    this.setState({ gifts });
  };

  render() {
    return (
      <div className="app">
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => (
            <Gifts key={gift.id} gift={gift} removeGift={this.removeGift} />
          ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
