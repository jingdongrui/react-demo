import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos/index";

function App () {
  const data = feachTodos()

  return (
    <>
      <Todos data={data} />
    </>
  )
}

const feachTodos = () => {
  return [
    {
      id: 1,
      title: "do1",
      completed: false
    },
    {
      id: 2,
      title: "do2",
      completed: false
    },
    {
      id: 3,
      title: "do3",
      completed: true
    },
  ]
}

export default App
