import React from "react";

export default function useValidation() {
  const [inputValues, setInputValues] = React.useState({});
  const [errors, setErrors] = React.useState({ dummy: "lorem ipsum" });
  const [isFormValid, setIsFormValid] = React.useState(false);

  function checkFormValidity() {}

  function onInputChange(e) {
    setInputValues((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    setErrors((errors) => ({
      ...errors,
      [e.target.name]: e.target.validationMessage,
    }));
  }

  React.useEffect(() => {
    setIsFormValid(
      Object.keys(errors)
        .filter((item) => item !== "dummy")
        .every((item) => errors[item] === "")
    );
  }, [errors]);

  function resetForm() {
    setInputValues({});
    setErrors({ dummy: "lorem ipsum" });
    setIsFormValid(false);
  }

  return { inputValues, errors, onInputChange, isFormValid, resetForm };
}
