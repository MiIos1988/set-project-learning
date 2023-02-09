import React, { useState } from "react";
import { loginUser } from "../../services/authService";

const LoginSectionComponent = () => {
  const [singInObj, setSingInObj] = useState({
    email: "",
    password: "",
  });
  const [validationMsg, setValidationMsg] = useState("");

  const handleSignInObj = (e) => {
    let copySingInObj = { ...singInObj };
    copySingInObj[e.target.name] = e.target.value;
    setSingInObj(copySingInObj);
  };

  const onLoginSubmit = () => {
    if (!singInObj.password || !singInObj.email) {
      return setValidationMsg(
        `Required field: ${!singInObj.password ? "password" : "email"}`
      );
    }
    loginUser(singInObj);
  };

  return (
    <>
      <h1 className="page-title">Log in to your account</h1>
      <div className="from-wrapper">
        <div className="login-form">
          <div className="mb-3">
            <label htmlFor="floatingInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              onChange={(e) => handleSignInObj(e)}
              placeholder="name@example.com"
            />
          </div>
          <div className="">
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => handleSignInObj(e)}
              id="floatingPassword"
              placeholder="Password"
            />
          </div>
          <button onClick={onLoginSubmit}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default LoginSectionComponent;
