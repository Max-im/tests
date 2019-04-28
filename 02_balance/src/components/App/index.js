import React from "react";
import Wallet from "../Wallet";
import Loot from "../Loot";

export default function index() {
  return (
    <div>
      <h2>Balance</h2>
      <hr />
      <Wallet data-test="app-wallet" />
      <hr />
      <Loot data-test="app-loot" />
    </div>
  );
}
