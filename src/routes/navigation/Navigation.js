import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";

import classes from "./Navigation.module.scss";

import CrwnLogo from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { iscartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className={classes.navigation}>
        <Link className={classes.logoContainer} to="/">
          <img src={CrwnLogo} alt="CrwnLogoImg"></img>
        </Link>
        <div className={classes.navLinksContainer}>
          <Link className={classes.navLink} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className={classes.navLink} onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className={classes.navLink} to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {iscartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default Navigation;
