import "./index.css";
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import type { FormEvent } from "react";

interface TodosProps {
  id: number,
  title: string,
  completed: boolean,
}

const Todos: React.FC<{ data: TodosProps[] }> = (props) => {
  // console.log("Todos渲染了！", new Date());
  const { data } = props
  const [todoList, setTodoList] = useState(data)

  const addTask = (userInput: string) => {
    setTodoList([...todoList, {
      id: todoList.length + 1,
      title: userInput,
      completed: false,
    }])
  }
  const removeTask = (taskid: number) => {
    const index = todoList.findIndex(item => item.id === taskid)
    if (index === -1) return false
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }
  const handleCheck = (taskid: number, isCompleted: boolean) => {
    console.log(taskid);
    const index = todoList.findIndex((item) => item.id === taskid)
    todoList[index].completed = !todoList[index].completed
    setTodoList([...todoList])
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodosForm addTask={addTask} />
        {todoList.map((item) => (
          <TodosItem data={item} key={item.id} onDelete={removeTask} handleCheck={handleCheck} />
        ))}
      </Container >
    </>
  )
}
interface TodosFormProps {
  addTask: (userInput: string) => void
}
const TodosForm: React.FC<TodosFormProps> = (props) => {
  const { addTask } = props
  const [userInput, setUserInput] = useState("")
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <InputGroup className="mb-2 mt-2">
          <FormControl
            placeholder="do something"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button type="submit" variant="outline-secondary">
            ADD
          </Button>
        </InputGroup>
      </Form>
    </>
  )
}

interface TodosItemProps {
  data: {
    id: number,
    title: string,
    completed: boolean,
  }
  onDelete: (taskid: number) => void
  handleCheck: (taskid: number, isCompleted: boolean) => void
}

const TodosItem: React.FC<TodosItemProps> = (props) => {
  // console.log("TodosItem渲染了！", new Date());
  const { data, onDelete, handleCheck } = props

  return (
    <>
      <InputGroup className="item" key={data.id}>
        <InputGroup.Checkbox defaultChecked={data.completed} onChange={() => handleCheck(data.id, data.completed)} />
        <FormControl disabled defaultValue={data.title} style={{ textDecoration: data.completed ? "line-through 2px" : "none" }} />
        <Button variant="danger" onClick={() => onDelete(data.id)}>del</Button>
      </InputGroup>
    </>
  )
}

export default Todos