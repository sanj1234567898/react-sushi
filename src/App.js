import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/LayOut/Header";
import Meals from "./components/meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsVisibale, setCartISVisibale] = useState(false);

  const showCartHandler = () => {
    setCartISVisibale(true);
  };

  const hideCartHandler = () => {
    setCartISVisibale(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisibale && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
