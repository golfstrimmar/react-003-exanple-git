import React ,{useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";


const ToDoItem = ({ item, index, onChange }) => {


const {removeTodo} = useContext(Context);


const classes = []
if (item.complited) {
  classes.push("done");
}




  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={item.complited}
          onChange={() => onChange(item.id)}
        />
        <span>{index + 1}.</span>
        <h2>{item.title}</h2>
      </span>
      <button onClick={() => removeTodo(item.id)}>remove</button>
    </li>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};



export default ToDoItem;
