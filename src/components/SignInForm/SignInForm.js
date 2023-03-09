import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import classes from "./SignInForm.module.scss";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevstate) => {
      return { ...prevstate, [name]: value };
    });
  };

  const resetFormFields = () => {
    setFormFields(() => {
      return defaultFormFields;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user associated to this email");
          resetFormFields();
          break;
        case "auth/wrong-password":
          alert("Incorrect password for email");
          resetFormFields();
          break;
        default:
          console.log("user Sign in encountered an error ", error);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className={classes.signInContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        ></FormInput>
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        ></FormInput>
        <div className={classes.ButtonWrapper}>
          <Button buttonType="" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
