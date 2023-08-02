import classes from "./AvailableMeals.module.css";
import Card from "../Layout/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function Meals() {
  const tab = DUMMY_MEALS.map((props) => (
    <MealItem
      key={props.id}
      name={props.name}
      description={props.description}
      price={props.price}
    />
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{tab}</ul>
      </Card>
    </div>
  );
}
