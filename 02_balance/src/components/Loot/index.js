import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBitcoin } from "../../store/actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  static propTypes = {
    bitcoin: PropTypes.object.isRequired,
    balance: PropTypes.number.isRequired,
    fetchBitcoin: PropTypes.func.isRequired
  };

  retrieveBitcoin = () => {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return "";
    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  };

  render() {
    return (
      <div data-test="loot">
        <h3 data-test="loot__title">
          Bitcoin balance: {this.retrieveBitcoin()}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bitcoin: state.bitcoin,
  balance: state.balance
});

export default connect(
  mapStateToProps,
  { fetchBitcoin }
)(Loot);
