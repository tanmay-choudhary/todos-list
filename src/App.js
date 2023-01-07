import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos.tsx";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo.tsx";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo ;
  let testData = [
    {
      sno: "111",
      title: "title",
      desc: "desc",
      tags: ["tags"],
      status: "status",
      date: "date",
      date2: "date2",
    },
  ];
  if (localStorage.getItem("todos") === null) {
    initTodo = [
      {
        sno: "111",
        title: "title",
        desc: "desc",
        tags: ["tags"],
        status: "status",
        date: "date",
        date2: "date2",
      },
      {
        sno: "113",
        title: "title",
        desc: "desc",
        tags: ["tags"],
        status: "status",
        date: "date",
        date2: "date2",
      },
      {
        sno: "114",
        title: "title",
        desc: "desc",
        tags: ["tags"],
        status: "status",
        date: "date",
        date2: "date2",
      },
      {
        sno: "115",
        title: "title",
        desc: "desc",
        tags: ["tags"],
        status: "status",
        date: "date",
        date2: "date2",
      },
      {
        sno: "116",
        title: "title",
        desc: "desc",
        tags: ["tags"],
        status: "status",
        date: "date",
        date2: "date2",
      },
    ];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    initTodo = [...initTodo,...testData];
  }

  const onEdit = () =>{
    
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, tags, status, date, date2) => {
    console.log(
      "I am adding this todo",
      title,
      desc,
      tags,
      status,
      date,
      date2
    );
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      tags:tags,
      status:status,
      date:date,
      date2:date2
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        {/* <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />  */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
              </>
            }
          />

          <Route path="/about" element={<About />} />

          {/* <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>  */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
