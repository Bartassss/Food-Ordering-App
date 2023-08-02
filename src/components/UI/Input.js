import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        type={props.type}
        min={1}
        defaultValue={1}
        value={props.value}
        ref={ref}
        id={props.id}
      />
    </div>
  );
});

export default Input;
