
import TodoList from "../../components/TodoList/index";

const Todos = () => {
  const data = feachTodos()

  return (
    <>
      <TodoList data={data} />
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

export default Todos
