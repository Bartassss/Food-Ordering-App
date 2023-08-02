import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";


export default function CartItems(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.hider} />, document.getElementById("backdrop"))}
    </React.Fragment>
  );
}
