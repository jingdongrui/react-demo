import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/index";
import Todos from "./pages/todos/index";
import "bootstrap/dist/css/bootstrap.min.css";
// 定义需要控制权限的路由
const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  // 未匹配的路由，跳转到首页
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];

function App () {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
