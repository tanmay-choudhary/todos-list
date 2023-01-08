import React, { useState } from "react";
import { Space, Table, Tag, Form, Input, Checkbox, Button } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Select } from "antd";

export const AddTodo = (props) => {
  // let titleData = "";
  // let descData = "";
  // if(props.isEdit){
  //   titleData = props.editing.title;
  //   descData = props.editing.desc;
  // }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const submit = (e : any) => {
    //console.log("I am in submit  = ", title, desc, tags ,status , date);
    e.preventDefault();
    let currDate = new Date().toString();
   // let currDay = new Date().get.toString();
    if (!title || !desc || !status) {
      alert("Title or Description cannot be blank");
    }else if(title.length>100 || desc.length>100){
      alert("Title or Description length should be less then 100");
     }
     else {
      if (!props.isEdit) {
        console.log("inside Addd");
        props.addTodo(title, desc, tags, status, date, currDate);
        setTitle("");
        setDesc("");
        setDate("");
        setStatus("");
        setTag("");
        setTags([]);
      } else {
        console.log("inside Edittt");
        props.editTodo(
          props.editing.sno,
          title,
          desc,
          tags,
          status,
          date,
          currDate
        );
      }
      
    }
    // return false;
  };
  if (props.editing) {
    //setTags(props.editing.tags);
    console.log("edit mode", props.editing.title);
  } else {
    console.log("Add mode");
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const addTags = (e) => {
    console.log("inside add tags");
    setTag("");
    setTags(() => {
      return [...tags, e.target.value];
    });
  };
  return (
    <div className="container my-3">
      {props.isEdit ? <h3>Edit a Todo</h3> : <h3>Add a Todo</h3>}
      <Form>
        <Form.Item label={"Title"}>
          <input
            name={"title"}
            value={title}
            //  defaultValue={props.isEdit ? props.editing.title : ""}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={props.isEdit ? props.editing.title : "Enter Title"}
          />
        </Form.Item>
        <Form.Item label={"Desc"}>
          <input
            name={"desc"}
            value={desc}
            //defaultValue={props.isEdit ? props.editing.desc : ""}
            onChange={(e) => setDesc(e.target.value)}
            placeholder={props.isEdit ? props.editing.desc : "Description"}
          />
        </Form.Item>
        <Form.Item label={"Deadline"}>
          <input
            name={"date"}
            type="date"
            value={date}
            //defaultValue={props.isEdit ? props.editing.date : "-"}
            onChange={(e) => setDate(e.target.value)}
            placeholder={props.isEdit ? props.editing.date : "Enter Due Date"}
          />
        </Form.Item>
        <Form.Item name={"status"} label={"Status"}>
          <Select
            //defaultValue={props.isEdit ? props.editing.status : "-"}
            placeholder={props.isEdit ? props.editing.status : "Enter Status"}
            style={{ width: 120 }}
            value={status}
            options={[
              {
                value: "Open",
                label: "Open",
              },
              {
                value: "Working",
                label: "Working",
              },
              {
                value: "Overdue",
                label: "Overdue",
              },
              {
                value: "Closed",
                label: "Closed",
              },
            ]}
            onChange={(e) => setStatus(e)}
          />
        </Form.Item>
        <Form.Item label={"Tag"}>
          <input
            // type="text"
            name={"tag"}
            placeholder="Enter Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
          {/* { props.editing?.tags?.map((item)=>{
            return <Tag closable>{item}</Tag>;
          })} */}
          {tags.map((item) => {
            return <Tag closable>{item}</Tag>;
          })}
        </Form.Item>
        <Button type="primary" onClick={submit}>
          {!props.isEdit ? "Add" : "Edit"}
        </Button>
      </Form>
    </div>
  );
};
