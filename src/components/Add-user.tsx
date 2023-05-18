import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as actions from "./actionTypes";
import Reducer from "./Reducer";
import { store } from "./store";

function AddUser() {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const addUser = (data) => {
    store.dispatch({
      type: actions.CHECK_USER,
      payload: {
        identity: data.identity,
      },
    });
    let storeData = store.getState();
    if (!storeData.userFound) {
      store.dispatch({
        type: actions.ADD_USER,
        payload: {
          identity: data.identity,
          name: data.name,
        },
      });
    } else {
      store.dispatch({
        type: actions.UPDATE_USER,
        payload: {
          identity: data.identity,
          name: data.name,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(addUser)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          autoComplete="off"
          className="form-control"
          id="name"
          {...register("name", {})}
          placeholder="enter name"
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          autoComplete="off"
          className="form-control"
          id="identity"
          {...register("identity", {})}
          placeholder="enter ID"
        />
        <label htmlFor="identity">Identity Number</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg mt-4"
        style={{ width: "100%" }}
      >
        Add/Update user
      </button>
    </form>
  );
}

export default AddUser;
