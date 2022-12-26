import { useState } from "react";

const useToggle = (initialValue) => {
  const [isActive, setActive] = useState(initialValue);

  const toggle = () => {
    setActive(!isActive);
  };

  return {
    isActive,
    toggle,
  };
};

export default useToggle;
