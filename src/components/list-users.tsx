import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { store } from "./store";
function ListUser() {
  const location = useLocation();
  console.log("in reduxdemo");
  let [tableData, settableData] = useState([]);
  store.subscribe(() => {
    console.log(store.getState());
    tableData = store.getState()?.users;
    tableData = [...tableData];
    settableData(tableData);
    console.log("table data ", tableData);
  });

  return (
    <>
      <div className="container m-5">
        <h2>Userlist</h2>
        <p>you can update or add users</p>
        <table className="table">
          <thead>
            <tr>
              <th>S no.</th>
              <th>Identity number</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{item.SNO}</td>
                <td>{item.identity}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListUser;
