import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import Form from "../../components/Form";

const SignUp = () => {
  const navigate = useNavigate();

  const [errorCode, setErrorCode] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });

  const handleSignUp = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("isAuth", "true");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      setErrorCode(errorCode);
    }
  };
  return (
    <Form
      className="signup-form"
      btnSwitch="Sign in and keep going!"
      title="Registration"
      question="Already have an account?"
      btnText="Sign Up"
      switchToPage={"/sign-in"}
      handleSubmit={handleSignUp}
      errorCode={errorCode}
    ></Form>
  );
};

export default SignUp;
