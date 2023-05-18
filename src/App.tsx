import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AccountInfo" element="/login" />
        <Route path="/Assignments" element="/login" />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
