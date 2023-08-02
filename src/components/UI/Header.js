import classes from "./Header.module.css";
import zdj from "./meals.jpg";
import Cart from "../Cart/Cart";


function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Cart onClick={props.shower} />
      </header>
      <div className={`${classes.mainimage}`}>
        <img src={zdj} alt="fot" />
      </div>
      
    </>
  );
}

export default Header;
