import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import classes from "./SignIn.module.scss";
const SignIn = () => {
  return (
    <div className={classes.SignInContainer}>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};
export default SignIn;
