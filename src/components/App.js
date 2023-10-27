import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks]= useState(TASKS)
  const categories= CATEGORIES
  const [selectedCategory, setSelectedCategory] = useState("All")

  function onDelete(text){
    const newTasks = tasks.filter((task) => (task.text !== text))
    setTasks(newTasks)
  }

  function addNewTask(newTask){
    setTasks([...tasks, newTask])
  }

  


    const tasksToDisplay= tasks.filter((task) => {
      if(selectedCategory === "All"){
        return true
      } else{
        return selectedCategory === task.category
      }
  })

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onButton={selectedCategory} selectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={tasksToDisplay} onDelete={onDelete}/>
    </div>
  );
}

export default App;
