import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const {
    value: name,
    isvalid: nameisvalid,
    valuehaserror: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isvalid: emailisvalid,
    valuehaserror: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameisvalid && emailisvalid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameisvalid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    console.log(name, email);

    // const enteredValue = nameInputRef.current.value;
  };

  const nameInputclass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputclass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputclass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text"> Name must not be empty. </p>
        )}
      </div>
      <div className={emailInputclass}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text"> Please enter a valid email. </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
