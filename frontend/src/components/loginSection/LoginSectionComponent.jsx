import React, { useState } from "react";
import { loginUser, setUserToLocalStorage } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/user.slicer";

const LoginSectionComponent = () => {
  const navigate = useNavigate();
  const [singInObj, setSingInObj] = useState({
    email: "",
    password: "",
  });
  const [validationMsg, setValidationMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

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
    loginUser(singInObj)
      .then((response) => {
        console.log("response...", response);
        if (response.status === 215) {
          setErrorMsg(response.data);
        } else {
          setUserToLocalStorage(response.data);
          dispatch(saveUser(response.data));
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("error...", error);
        if (error) {
          setErrorMsg("Something went wrong. Please try again.");
        }
      })
      .finally(() => {});
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
          <br />
          {validationMsg && <p>{validationMsg}</p>}
          {errorMsg && <p>{errorMsg}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginSectionComponent;
