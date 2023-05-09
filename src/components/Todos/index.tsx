import "./index.css";
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

interface TodosProps {
  id: number,
  title: string,
  completed: boolean,
}

const Todos: React.FC<{ data: TodosProps[] }> = (props) => {
  console.log(1);
  const { data } = props
  let temp = ""
  // let addValue: string = ""
  const [addValue, setAddValue] = useState("")

  const add = () => {
    console.log(temp);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <InputGroup className="mb-2 mt-2">
          <FormControl
            placeholder="do something"
            defaultValue={addValue}
            onChange={(e) => { temp = e.target.value }}
          />
          <Button variant="outline-secondary" onClick={() => add()}>
            ADD
          </Button>
        </InputGroup>
        {data.map((item) => (
          <TodosItem data={item} key={item.id} onDelete={() => {
            console.log(222);
          }} />
        ))}
      </Container >
    </>
  )
}

interface TodosItemProps {
  data: {
    id: number,
    title: string,
    completed: boolean,
  }
  onDelete: () => void
}

const TodosItem: React.FC<TodosItemProps> = (props) => {
  const { data } = props

  return (
    <>
      <InputGroup className="item" key={data.id}>
        <InputGroup.Checkbox defaultChecked={data.completed} />
        <FormControl defaultValue={data.title} style={{ textDecoration: data.completed ? "line-through 2px" : "none" }} />
        <Button variant="danger">del</Button>
      </InputGroup>
    </>
  )
}

export default Todos