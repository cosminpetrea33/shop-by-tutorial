import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../Button/Button";

import CartItem from "../CartItem/CartItem";

import classes from "./CartDropdown.module.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className={classes.cartDropdownContainer}>
      <div className={classes.cartItems}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
