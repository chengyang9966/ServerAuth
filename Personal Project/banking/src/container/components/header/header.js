import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "../../components/component.css";

export default function header(props) {
  return (
    <div className="header">
      <div className="title">{props.companyName}</div>
      <div className="img">{props.userName}</div>
      <Button>
        <MenuIcon
          className="button-title"
          fontSize="large"
          style={{ color: "white" }}
        />
      </Button>
    </div>
  );
}
