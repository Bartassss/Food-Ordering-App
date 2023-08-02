import { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import NumContext from "./NumContex";


export default function Cart(props) {
  const cxt = useContext(NumContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>
        Your cart
      </div>
      <div className={classes.badge}>{cxt.CartAmount}</div>
    </button>
  );
}
