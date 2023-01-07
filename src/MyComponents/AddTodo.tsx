import React, { useState } from "react";
import { Space, Table, Tag, Form, Input, Checkbox ,Button} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Select } from "antd";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const submit = (e) => {
    //console.log("I am in submit  = ", title, desc, tags ,status , date);
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc, tags,status,date,new Date());
      setTitle("");
      setDesc("");
    }
    // return false;
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const addTags = (e) =>{
    console.log("inside add tags")
    setTag("");
    setTags(()=>{
      return [...tags,e.target.value];
    })
  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      {/* <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="desc"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deadline" className="form-label">
              Deadline
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="desc"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="desc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add Todo
          </button>
        </form> */}
      <Form>
        <Form.Item name={"title"} label={"Title"}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
        </Form.Item>
        <Form.Item name={"desc"} label={"Desc"}>
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          />
        </Form.Item>
        <Form.Item name={"date"} label={"Date"}>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter Due Date"
          />
        </Form.Item>
        <Form.Item name={"status"} label={"Status"}>
          <Select
            defaultValue="-"
            style={{ width: 120 }}
            value={status}
            options={[
              {
                value: "Open",
                label: "Open",
              },
              {
                value: "Closed",
                label: "Closed",
              },
            ]}
            onChange={(e) => setStatus(e)}
          />
        </Form.Item>
        <Form.Item name={"tag"} label={"Tag"}>
          <Input
            // type="text"
            placeholder="Enter Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
          {tags.map((item) => {
            return <Tag closable>{item}</Tag>;
          })}
        </Form.Item>
        <Button type="primary" onClick={submit}>
          Add
        </Button>
      </Form>
    </div>
  );
};
