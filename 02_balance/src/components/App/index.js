import React from "react";
import Wallet from "../Wallet";
import Loot from "../Loot";

export default function index() {
  return (
    <div data-test="app">
      <h2 data-test="app__title">Balance</h2>
      <hr />
      <Wallet data-test="app__wallet" />
      <hr />
      <Loot data-test="app__loot" />
    </div>
  );
}
