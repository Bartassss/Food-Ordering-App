import classes2 from "./MealItem.module.css";
import MealsForm from "./MealsForm";

export default function MealItem(props) {
  return (
    <li className={classes2.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes2.description}>{props.description}</div>
        <div className={classes2.price}>${props.price}</div>
      </div>
      <MealsForm />
    </li>
  );
}
