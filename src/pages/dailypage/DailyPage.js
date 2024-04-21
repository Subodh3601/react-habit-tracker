import React from 'react'
import TaskListComponent from '../../components/taskComponent/TaskListComponent'
import "./DailyPage.css";
import CreateTaskComponent from '../../components/taskComponent/CreateTaskComponent';


const DailyPage = () => {
  return (
    <div className='container-div'>
      <CreateTaskComponent/>
      <TaskListComponent />
      
    </div>
  )
}

export default DailyPage