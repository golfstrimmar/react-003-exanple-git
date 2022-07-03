import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

const AddToDo = ({ onCreate }) => {
  const input = useInputValue("");

  function onSubmitHandler(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear()
    }
  }

  return (
    <form
      style={{
        margin: "1rem 0",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
      }}
      onSubmit={onSubmitHandler}
    >
      <input type="text" style={{ margin: " 0 .5rem 0 0" }} {...input.bind} />
      <button type="submit" style={{ padding: ".2rem .5rem" }}>
        add todo
      </button>
    </form>
  );
};

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddToDo;
