import { Children } from "react";
import classes from "./Button.module.scss";

const BUTTON_TYPE_CLASSES = {
  google: classes.googleSignIn,
  inverted: classes.inverted,
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${classes.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
