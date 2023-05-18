import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
function UpdateUser() {
  const location = useLocation();
  console.log("in reduxdemo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const updateUser = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(updateUser)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          autoComplete="off"
          className="form-control"
          id="floatingInput"
          placeholder="enter ID"
        />
        <label htmlFor="floatingInput">Identity Number</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg mt-4"
        style={{ width: "100%" }}
      >
        Update user
      </button>
    </form>
  );
}

export default UpdateUser;
