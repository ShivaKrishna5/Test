import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";
import ReduxDemo from "./redux-demo";
import AddUser from "./Add-user";
import ListUser from "./list-users";
function Home() {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <Header />
      <ReduxDemo>
        <AddUser></AddUser>
        <ListUser></ListUser>
      </ReduxDemo>
    </>
  );
}

export default Home;
