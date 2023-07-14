import { useState } from 'react'
import { Input } from './Input';
import { Button } from './Button'
import { List } from './List';
import './TaskList.css'


function TaskList() {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([
    {id: 1, name: 'task1'},
    {id: 2, name: 'task2'},
    {id: 3, name: 'task3'}

  ]);

  return (
    <>

      <div className="main-wrapper">

        <Input newTask={ newTask } setNewTask={setNewTask} />
        <Button newTask={ newTask } setNewTask={setNewTask} setTaskList={setTaskList} />
        <List taskList={ taskList } setTaskList={setTaskList} />
      </div>



    </>
  )
}

export default TaskList
