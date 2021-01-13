import React from "react";
import "../../components/component.css";

export default function account(props) {
  const { title, balance, desc } = props;
  return (
    <div className="acc">
      <div className="acc-title">{title}</div>
      <div className="acc-balance">{balance}</div>
      <div className="acc-desc">{desc}</div>
    </div>
  );
}
