import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/index";
import Todos from "./pages/todos/index";
import Antd from "./pages/antd/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/todos" element={<Todos />} ></Route>
        <Route path="/antd/*" element={<Antd />} ></Route>
        <Route path="*" element={<Navigate to="/home" />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
