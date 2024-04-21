import React, { useRef } from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { taskActions } from "../../redux/TaskReducer";

const CreateTaskComponent = () => {
  const dispatch = useDispatch();
  const headingRef = useRef();
  const monRef = useRef();
  const tueRef = useRef();
  const wedRef = useRef();
  const thuRef = useRef();
  const friRef = useRef();
  const satRef = useRef();
  const sunRef = useRef();
  const fromRef = useRef();
  const toRef = useRef();

  const handleAdd = () => {
    // Extracting values from the refs
    const heading = headingRef.current.value;
    const from = fromRef.current.value;
    const to = toRef.current.value;
    const selectedDays = [];

    if (monRef.current.checked) {
      selectedDays.push({ day: "Monday", status: "unattempted" });
    }
    if (tueRef.current.checked) {
      selectedDays.push({ day: "Tuesday", status: "unattempted" });
    }
    if (wedRef.current.checked) {
      selectedDays.push({ day: "Wednesday", status: "unattempted" });
    }
    if (thuRef.current.checked) {
      selectedDays.push({ day: "Thursday", status: "unattempted" });
    }
    if (friRef.current.checked) {
      selectedDays.push({ day: "Friday", status: "unattempted" });
    }
    if (satRef.current.checked) {
      selectedDays.push({ day: "Saturday", status: "unattempted" });
    }
    if (sunRef.current.checked) {
      selectedDays.push({ day: "Sunday", status: "unattempted" });
    }

    console.log("selected days", selectedDays)
    // Dispatching action with the extracted values
    dispatch(taskActions.add({ heading, days: selectedDays,from,to }));

    // Clear input fields and checkboxes
    headingRef.current.value = "";
    monRef.current.checked = false;
    tueRef.current.checked = false;
    wedRef.current.checked = false;
    thuRef.current.checked = false;
    friRef.current.checked = false;
    satRef.current.checked = false;
    sunRef.current.checked = false;
    fromRef.current.value = "";
    toRef.current.value = "";
  };

  return (
    <div className="form-outer-div">
      <div className="form-title-div">
        <h1>Create your Daily task</h1>
      </div>
      <div className="form-div">
        <label className="label" htmlFor="heading">
          <span className="create-task-heading">HEADING:</span>
        </label>
        <input
          ref={headingRef}
          className="heading-input"
          name="heading"
          type="text"
        />
        <br />
        <label className="label" htmlFor="Monday">Monday</label>
        <input ref={monRef} className="day-input" name="Monday" type="checkbox" value="Monday" />
        <label className="label" htmlFor="Tuesday">Tuesday</label>
        <input ref={tueRef} className="day-input" name="Tuesday" type="checkbox" value="Tuesday" />
        <label className="label" htmlFor="Wednesday">Wednesday</label>
        <input ref={wedRef} className="day-input" name="Wednesday" type="checkbox" value="Wednesday" />
        <label className="label" htmlFor="Thursday">Thursday</label>
        <input ref={thuRef} className="day-input" name="Thursday" type="checkbox" value="Thursday" />
        <label className="label" htmlFor="Friday">Friday</label>
        <input ref={friRef} className="day-input" name="Friday" type="checkbox" value="Friday" />
        <label className="label" htmlFor="Saturday">Saturday</label>
        <input ref={satRef} className="day-input" name="Saturday" type="checkbox" value="Saturday" />
        <label className="label" htmlFor="Sunday">Sunday</label>
        <input ref={sunRef} className="day-input" name="Sunday" type="checkbox" value="Sunday" />
        <br />
        {/* time selection  */}
        <label className="label" for="from">From: </label>
        <input ref={fromRef} type="time" name="to" />
        <label className="label" for="to">To: </label>
        <input ref={toRef} type="time" name="to" />
      </div>

      <button className="create-task" type="button" onClick={handleAdd}>
        Done
      </button>
    </div>
  );
};

export default CreateTaskComponent;
