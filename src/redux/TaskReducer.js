import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "task",
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
            const { heading, from, to, days } = action.payload;
            state.tasks.push({
                date: new Date().toDateString(),
                heading,
                time: `From ${from} To ${to}`,
                days: days,
            });
        },
        remove: (state, action) => {
            const index = action.payload.index; 
            state.tasks = state.tasks.splice(index, 1); 
        },
        toggleStatus: (state, action) => {

            const {index,dayIndex} = action.payload;
            const status = state.tasks[index].days[dayIndex].status;

            if (status === "unattempted") {
                state.tasks[index].days[dayIndex].status = "done";
            } else if (status === "done") {
                state.tasks[index].days[dayIndex].status = "notdone";
            } else {
                state.tasks[index].days[dayIndex].status = "unattempted";
            }
            
        }



    }
})

export const taskReducer = taskSlice.reducer;
export const taskActions = taskSlice.actions;

export const taskSelector = (state) => state.taskReducer.tasks;