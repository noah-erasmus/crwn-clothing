import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="EMAIL"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="PASSWORD"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
