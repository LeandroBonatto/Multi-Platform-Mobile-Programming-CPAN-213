import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDo from './ToDo';
import Completed from './Completed';

const tasks = [
  {
    id: 1,
    title: "Groceries",
    completed: false
  },
  {
    id: 2,
    title: "Car Repair",
    completed: false
  },
  {
    id: 3,
    title: "Laundry",
    completed: true
  },
  {
    id: 4,
    title: "Groceries again",
    completed: true
  }
];

function App() {
  const [appTasks, setAppTasks] = useState(tasks);
  console.log("Rendered");
  console.log("New state: " + appTasks);
  
  function handleChange(task) {
    const updatedTasks = appTasks.map(
      t => {
        if (task.id === t.id) {
          t.completed = !t.completed;
        }

        return t;
      }
    )

    setAppTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>Week 3 - React Demo</h2>
      <ToDo appTasks={appTasks} handleChange={handleChange} />
      <Completed appTasks={appTasks} handleChange={handleChange} />
    </div>
  );
}

export default App;
