import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const handleLoginError = (errorCode, errorMessage) => {
  const handledErrorCode = capitalizeFirstLetter(
    errorCode.slice(5).split("-").join(" ")
  );

  return handledErrorCode;
};
