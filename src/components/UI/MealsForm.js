import { useRef } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";


export default function MealsForm(props) {
  const InputVal = useRef();

  function SaveForm(event) {
    event.preventDefault();

  }
  return (
    <form className={classes.form} onSubmit={SaveForm}>
      <Input type="number" value={props.id} id={props.id} ref={InputVal} />
      <button>+ Add</button>
    </form>
  );
}
