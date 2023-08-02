import classes from "./Modal.module.css";
import classes2 from "./Cart.module.css";
import React from "react";


export default function Backdrop(props) {
    return (
      <React.Fragment>
        <div className={classes.backdrop} onClick={props.onClick}></div>
        <div className={classes.modal}>
          <div className={classes["cart-item"]}>
            <li></li>
          </div>
          <div className={classes2.action}></div>
          <div className={classes2.total}>
            <h3>Total Amount</h3>
          </div>
          <div className={classes2.actions}>
            <button onClick={props.onClick} >Close</button>
            <button className={classes2.button}>Order</button>
          </div>
        </div>
      </React.Fragment>
    );
  }

