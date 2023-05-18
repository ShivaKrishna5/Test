import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
interface LoginDataState {
  loginData: {
    email: string;
    password: string;
  };
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const [loginData, setLoginData] = useState<LoginDataState>({
    loginData: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const validateForm = (data) => {
    console.log(data);
    navigate("/home", { state: { data } });
  };
  return (
    <div className="offset-4 col-4">
      <div
        className="p-5 pt-4 mt-5 border"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div className="mb-5">
          <h1 style={{ textAlign: "center" }}>Login</h1>
        </div>
        <form onSubmit={handleSubmit(validateForm)}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={
                errors.UserName ? "form-control is-invalid" : "form-control"
              }
              autoComplete="off"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("UserName", {
                required: "Email Address is required",
                maxLength: 40,
              })}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.UserName?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.UserName?.type?.toString() === "maxLength" && (
              <p className="text-danger" role="alert">
                Max length reached
              </p>
            )}
          </div>

          <div className="form-floating">
            <input
              {...register("Password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              type="password"
              className={
                errors.Password ? "form-control is-invalid" : "form-control"
              }
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.Password?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.Password?.type?.toString() === "minLength" &&
              errors.Password?.type?.toString() !== "required" && (
                <p className="text-danger" role="alert">
                  Should be of 8 characters
                </p>
              )}
            {errors.Password?.type?.toString() === "maxLength" && (
              <p className="text-danger" role="alert">
                Max 20 characters allowed
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg mt-4"
            style={{ width: "100%" }}
          >
            Sign in
          </button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
