import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Form from "../../components/Form";

const SignIn = () => {
  const navigate = useNavigate();

  const [errorCode, setErrorCode] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });

  const handleSignIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", "true");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      setErrorCode(errorCode);
    }
  };

  return (
    <Form
      className="signin-form"
      btnSwitch="Sign up and get started!"
      title="Identification"
      question="Don't have an account?"
      btnText="Sign In"
      switchToPage={"/sign-up"}
      handleSubmit={handleSignIn}
      errorCode={errorCode}
    ></Form>
  );
};

export default SignIn;
