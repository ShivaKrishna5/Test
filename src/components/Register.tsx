import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";
interface RegisterUserData {
  userData: {
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    gender: boolean;
    tnc: boolean;
    password: string;
  };
}
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const validateDOB = (date) => {
    const birthdate = new Date(date);
    const today = new Date();
    const age =
      today.getFullYear() -
      birthdate.getFullYear() -
      (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate()));
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };
  const navigate = useNavigate();
  const validateForm = (data) => {
    console.log(data);
    navigate("/home", { state: { data } });
  };

  return (
    <div className="offset-4 col-4">
      <div
        className="p-5 pt-4 mt-5 border mb-5"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div className="mb-5">
          <h1 style={{ textAlign: "center" }}>Register</h1>
        </div>
        <form onSubmit={handleSubmit(validateForm)}>
          <div className="form-floating mb-3">
            <input
              type="email"
              autoComplete="off"
              className={
                errors.emailAddress ? "form-control is-invalid" : "form-control"
              }
              id="emailAddress"
              placeholder="name@example.com"
              {...register("emailAddress", {
                required: "Email Address is required",
                maxLength: 40,
              })}
            />
            <label htmlFor="emailAddress">Email address</label>
            {errors.emailAddress?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.emailAddress?.type?.toString() === "maxLength" && (
              <p className="text-danger" role="alert">
                Max length reached
              </p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={
                errors.firstName ? "form-control is-invalid" : "form-control"
              }
              id="firstName"
              placeholder="name@example.com"
              {...register("firstName", {
                required: "First name is required",
                maxLength: 15,
              })}
            />
            <label htmlFor="firstName">First name</label>
            {errors.firstName?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.firstName?.type?.toString() === "maxLength" && (
              <p className="text-danger" role="alert">
                Max length reached
              </p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              autoComplete="off"
              className={
                errors.lastName ? "form-control is-invalid" : "form-control"
              }
              id="lastName"
              placeholder="name@example.com"
              {...register("lastName", {
                required: "Email Address is required",
                maxLength: 15,
              })}
            />
            <label htmlFor="lastName">Last name</label>
            {errors.lastName?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.lastName?.type?.toString() === "maxLength" && (
              <p className="text-danger" role="alert">
                Max length reached
              </p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="date"
              autoComplete="off"
              className={
                errors.dob ? "form-control is-invalid" : "form-control"
              }
              id="dob"
              {...register("dob", {
                required: "Email Address is required",
                validate: validateDOB,
              })}
            />
            <label htmlFor="dob">Date of birth</label>
            {errors.dob?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                This field is required
              </p>
            )}
            {errors.dob?.type?.toString() === "validate" && (
              <p className="text-danger" role="alert">
                Age Should be minimum 18 years
              </p>
            )}
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              autoComplete="off"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="male"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="female"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              {...register("tnc", {
                required: "Email Address is required",
              })}
              value="accept"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              I accept terms and condition
            </label>
            {errors.tnc?.type?.toString() === "required" && (
              <p className="text-danger" role="alert">
                Please accept terms and conditions
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
        </form>
      </div>
    </div>
  );
}

export default Register;
