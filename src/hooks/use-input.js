import { useState } from "react";

const useInput = (validatevalue) => {
  const [value, setvalue] = useState("");
  const [valueistouched, setvalueistouched] = useState(false);
  const valueisvalid = validatevalue(value);
  const valuehaserror = valueistouched && !valueisvalid;

  const valueChangeHandler = (event) => {
    setvalue(event.target.value);
  };
  const valueBlurHandler = () => {
    setvalueistouched(true);
  };

  const reset = () => {
    setvalue("");
    setvalueistouched(false);
  };

  return {
    value,
    isvalid: valueisvalid,
    valuehaserror,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
