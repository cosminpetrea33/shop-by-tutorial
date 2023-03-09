import { useContext } from "react";
import classes from "./CartIcon.module.scss";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoopingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = () => {
  const { iscartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!iscartOpen);
  };
  return (
    <div className={classes.CartIconContainer} onClick={toggleIsCartOpen}>
      <ShoopingIcon className={classes.ShoopingIcon}></ShoopingIcon>
      <span className={classes.itemCount}>{cartCount}</span>
    </div>
  );
};
export default CartIcon;
