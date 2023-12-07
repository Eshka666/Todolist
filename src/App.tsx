import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

 function App() {
 
  let tasks1: Array<TaskType> =[
    {id:1, title:"CSS", isDone: true},
    {id:2, title:"Js", isDone: true},
    {id:3, title:"React", isDone: false},
  ]

  let tasks2: Array<TaskType> =[
    {id:1, title:"Term", isDone: true},
    {id:2, title:"XXX", isDone: false},
    {id:3, title:"Jen", isDone: true},
  ]

  return (
    <div>
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2}/>
    </div>
  );
}


export default App;