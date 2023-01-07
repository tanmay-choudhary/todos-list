import React from 'react'
import {TodoItem} from "./TodoItem";
import { Space, Table, Tag ,Modal} from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Todos = (props) => {
     interface DataType {
       key: string;
       name: string;
       age: number;
       address: string;
       tags: string[];
       onClick : object;
     }
     console.log(props.todos, " inside TodosTsx");
     const columns: ColumnsType<DataType> = [
       {
         title: "title",
         dataIndex: "title",
         key: "title",
         render: (title) => <a>{title}</a>,
       },
       {
         title: "desc",
         dataIndex: "desc",
         key: "desc",
       },
       {
         title: "Tags",
         key: "tags",
         dataIndex: "tags",
         render: (_, { tags }) => (
           <>
             {tags.map((tag) => {
               let color = tag.length > 5 ? "geekblue" : "green";
               if (tag === "loser") {
                 color = "volcano";
               }
               return (
                 <Tag color={color} key={tag}>
                   {tag.toUpperCase()}
                 </Tag>
               );
             })}
           </>
         ),
       },
       {
         title: "Created On",
         dataIndex: "date2",
         key: "date2",
       },
       {
         title: "Deadline",
         dataIndex: "date",
         key: "date",
       },
      //  {
      //    title: "Action",
      //    key: "action",
      //    dataIndex: "sno",
      //    render: (_: any, record,onDelete) => (
      //      <Space size="middle">
      //        <a>Edit {record.name} </a>
      //        <a>Delete {onDelete}</a>
             
      //         {/* <button onClick={onDelete}>Delete</button>  */}
      //      </Space>
      //    ),
      //  },
      {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                props.onEdit(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                props.onDelete(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
     ];

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
      // <div className="container" style={myStyle}>
      //     <h3 className="my-3">Todos List</h3>
      //     {props.todos.length===0? "No Todos to display":
      //     props.todos.map((todo)=>{
      //         console.log(todo.sno);
      //         return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      //         )
      //     })
      //       }
      // </div>
      <>
        <Table columns={columns} dataSource={props.todos} />;
      </>
    );
}

