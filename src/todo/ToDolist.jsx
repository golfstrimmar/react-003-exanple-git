import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem";


const ToDolist = (props) => {
  return (
    <ul className="post">
      {props.ToDos.map((item,index) => {
      return <ToDoItem item={item} key={item.id} index={index} onChange={props.onToggle} />;
      })}
    </ul>
  );
};

ToDolist.propTypes = {
  ToDos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};



export default ToDolist;
