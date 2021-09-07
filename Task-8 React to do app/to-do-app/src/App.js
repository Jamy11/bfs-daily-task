import {useState} from 'react'
import './App.css';
import AddTask from './component/AddTask';
import Header from './component/Header'
import Tasks from './component/Tasks';
function App() {

  const [tasks,setTasks] = useState([
    {
      id:1,
      task:'write a new blog post',
    },

    {
      id:2,
      task:'Something new',
    },

    {
      id:3,
      task:'Something more new',
    },

  ])
  function addNewTask(newData){
    setTasks([...tasks,newData])
  }
// console.log(tasks)

  function deleteTask(id){
    let newTaskList = tasks.filter(task=>task.id!==id);
    setTasks(newTaskList)
  }
  return (
    <div style={{textAlign:'center'}}>
      <Header name="Task Tracker" />
      <AddTask addNewTask={addNewTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
