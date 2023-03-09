import classes from "./FormInput.module.scss";
const FormInput = ({ label, inputOptions }) => {
  return (
    <div className={classes.group}>
      <input className={classes.formInput} {...inputOptions}></input>
      {label && (
        <label
          className={`${inputOptions.value.length ? classes.shrink : ""} ${
            classes.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
