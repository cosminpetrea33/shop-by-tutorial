import classes from "./CartItem.module.scss";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={classes.cartItemContainer}>
      <img src={imageUrl} alt={`${name}`}></img>
      <div className={classes.itemDetails}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
