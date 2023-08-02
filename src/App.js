import Header from "./components/UI/Header";
import MealsSummary from "./components/UI/MealsSummary";
import Meals from "./components/UI/Meals";
import CartItems from "./components/Cart/CartItems";
import { useState } from "react";
import Koszkon from "./components/Koszkon";

function App() {
  const [tfSnap, setSnap] = useState(false);

  function showw() {
    setSnap(true);
  }

  function hidee() {
    setSnap(false);
  }

  return (
    <Koszkon>
      <Header shower={showw}  />
      {tfSnap && <CartItems hider={hidee} />}
      <MealsSummary />
      <Meals />
    </Koszkon>
  );
}

export default App;
