import React, { useEffect } from "react";
import "./assets/css/ToDo.css";
import ToDolist from "./todo/ToDolist";
import Modal from "./modal/Modal";
import Context from "./context";
// import AddToDo from "./todo/addToDo";
import Loading from "./todo/Loading";


const AddToDo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./todo/addToDo"));
      }, 3000);
    })
);






function App() {
  let [ToDos, setToDos] = React.useState([]);
  let [loading, setloading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((ToDos) =>
        setTimeout(() => {
          setToDos(ToDos)
          setloading(false);
        }, 2000)
      );
  }, []);

  function ToggleToDo(id){
    setToDos(
      (ToDos = ToDos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      }))
    );
  };

  function removeTodo(id) {
    setToDos(ToDos.filter((item) => item.id !== id));
  }

  function addToDo(title) {
    setToDos(
      ToDos.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>react tutorial</h1>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Modal></Modal>
          <AddToDo onCreate={addToDo} />
        </React.Suspense>

        {loading && <Loading />}
        {ToDos.length ? (
          <ToDolist ToDos={ToDos} onToggle={ToggleToDo}></ToDolist>
        ) : loading ? null : (
          <p>no items!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
