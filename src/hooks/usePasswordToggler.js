// ./src/hooks/usePasswordToggler.js
import { useState } from "react";

export const usePasswordToggler = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [type, setType] = useState("password");

  const handlePasswordVisibility = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setPasswordVisibility((prevVisibility) => !prevVisibility);
  };

  return {
    type,
    passwordVisibility,
    handlePasswordVisibility,
  };
};
