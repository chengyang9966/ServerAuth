import React from "react";
import "../../components/component.css";

export default function transaction(props) {
  return (
    <div className="transaction">
      <div className="transaction-title">{props.title}</div>
      <div className="transaction-balance">{props.balance}</div>
      {props.lastTransaction > 0 ? (
        <div className="transaction-lastTransaction">
          - {props.lastTransaction}
        </div>
      ) : (
        <div className="transaction-lastTransaction">
          {props.lastTransaction}
        </div>
      )}
    </div>
  );
}
