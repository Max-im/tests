import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onDeposit, onWithdraw } from "../../store/actions/balance";

export class Wallet extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    onDeposit: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired
  };

  state = {
    balance: 0
  };

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) });
  };

  addDeposit = () => {
    this.props.onDeposit(this.state.balance);
  };

  addWithdraw = () => {
    this.props.onWithdraw(this.state.balance);
  };

  render() {
    return (
      <div data-test="wallet">
        <h3 className="balance" data-test="wallet__title">
          Balance {this.props.balance}
        </h3>
        <br />
        <input
          className="input-wallet"
          onChange={this.updateBalance}
          data-test="wallet__input"
        />

        <button
          className="btn-deposit"
          onClick={this.addDeposit}
          data-test="wallet__depositBtn"
        >
          add deposit
        </button>
        <button
          className="btn-withdraw"
          onClick={this.addWithdraw}
          data-test="wallet__withdrawBtn"
        >
          withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(
  mapStateToProps,
  { onDeposit, onWithdraw }
)(Wallet);
