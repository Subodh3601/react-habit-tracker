import React from 'react';
import './WeekComponent.css';
import successImage from '../../public/successImage.avif';
import { taskActions, taskSelector } from '../../redux/TaskReducer';
import { useDispatch, useSelector } from 'react-redux';

const WeekComponent = () => {
  const tasks = useSelector(taskSelector);

  // Generate an array of the previous 7 days
  const previousDates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dispatch = useDispatch();

  const handleStatus = (index, dayIndex) => {
    dispatch(taskActions.toggleStatus({ index, dayIndex }));
  };

  return (
    <>
      {previousDates.map((day, index) => {
        // Find tasks that have the current day in their days array
        const entriesForDay = tasks.filter((task) => task.days.some(d => d.day === day));

        return (
          <div className='week-detail-outer-div' key={index}>
            <div className='week-date'>{day}</div>
            {entriesForDay.length > 0 ? (
              entriesForDay.map((entry, entryIndex) => (
                <div className='week-detail-div' key={entryIndex}>
                  <div className='heading'>{entry.heading}</div>
                  <div className='week-time'>{entry.time}</div>
                  {entry.days.map((d, dayIndex) => (
                    d.day === day ?
                      <div key={dayIndex} className={`${d.status}`} onClick={() => handleStatus(entryIndex, dayIndex)}></div>
                      : null
                  ))}
                </div>
              ))
            ) : (
              <div className='no-entry'>No entry for this day</div>
            )}
          </div>
        );
      })}
      <div>
        <img className="success-image" src={successImage} alt='successimage'></img>
        <p className='weekpage-message'>Consistency doesn't guarantee success, but inconsistency will almost certainly lead to failure !!!</p>
      </div>
    </>
  );
};

export default WeekComponent;
