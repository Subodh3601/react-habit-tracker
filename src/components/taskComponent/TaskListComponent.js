import React from 'react';
import './Task.css';
import { taskActions, taskSelector } from '../../redux/TaskReducer';
import { useDispatch, useSelector } from 'react-redux';

const TaskComponent = () => {
  const tasks = useSelector(taskSelector);
  const dispatch = useDispatch();

  const handleStatus = (index,dayIndex) => {
    dispatch(taskActions.toggleStatus({index,dayIndex}))
  }
  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} className='container'>
          <div className="heading-div">
            <h1>{task.heading}</h1>
            <h2>{task.date}</h2>
            <h4>{ task.time}</h4>
            {task.days.length > 0 && (
              <div>
                {task.days.map((day, dayIndex) => (
                  
                  <div className="detail-div" key={dayIndex}>
                    <span>{ day.day}</span>
                    <span className={`status-${day.status}`}  onClick={()=>handleStatus(index,dayIndex)}></span>
                    </div>
                  
                ))}
              </div>
            )}
          </div>
          
        </div>
      ))}
    </>
  );
};

export default TaskComponent;


