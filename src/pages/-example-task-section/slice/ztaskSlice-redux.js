
//DEPRECATED IN FAVOR OF ZUSTAND
//import config from "@/config";
import { toast } from "react-toastify";
import api from "@/store/api";
import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

//const mockTasks=[{"id":1,"subject":"subject a","body":"body a","status":0,"result":0},{"id":2,"subject":"subject b","body":"body b","status":2,"result":2},{"id":3,"subject":"subject c","body":"body c","status":2,"result":2}];
//const mockTask={"id":1,"subject":"subject a","body":"body a","status":0,"result":0};
//const mockOptions={"task":{"status":[{"value":0,"text":"pending"},{"value":1,"text":"in progress"},{"value":2,"text":"completed"},{"value":3,"text":"cancelled"}],"result":[{"value":0,"text":""},{"value":1,"text":"good"},{"value":2,"text":"not good"},{"value":3,"text":"who knows"}]},"contact":{"type":[{"value":1,"text":"Business"},{"value":2,"text":"Personal"}]}};

export const listTasks = createAsyncThunk(
  'tasks/listTasks',
  async () => {
    const res = await api.get('task');
    return res.data;
  }
);

//should be it's own slice or use saga to call it when calling/tasks, task
export const listOptions = createAsyncThunk(
  'tasks/listOptions',
  async () => {
    const res = await api.get(`option/task`);
    return res.data; 
  }
);

export const retrieveTask = createAsyncThunk(
  'tasks/listTask',
  async (id) => {
    const res = await api.get(`task/${id}`);
    return res.data; 
  }
);

export const upsertTask = createAsyncThunk(
  'tasks/upsertTask',
  async (values) => {
    const res = await api.post('task', values); 
    return res.data; 
  }
);


const initialState= {
  tasks: [],
  task: {},
  options: {},
  loading:false, 
  error:null,
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  //reducers:{}, //not needed, everything is a thunk
  extraReducers: (builder) => {
    builder
      //list tasks
      .addCase(listTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listTasks.rejected, (state, action) => {
        toast.error("failed to fetch tasks");
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(listTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
      })

      //Retrieve task
      .addCase(retrieveTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(retrieveTask.rejected, (state, action) => {
        toast.error("failed to retrieve task");
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(retrieveTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.task = action.payload;
      })

      //upsert task
      .addCase(upsertTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(upsertTask.rejected, (state, action) => {
        toast.error("failed to save task");
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(upsertTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.task = action.payload;
      })      

      //options
      .addCase(listOptions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listOptions.rejected, (state, action) => {
        toast.error("failed to fetch Options");
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(listOptions.fulfilled, (state, action) => {
        //toast.success("Options fetched");
        state.status = 'idle';
        state.options = action.payload;
      });
  },  
})

export const selectOptions = (state) => state.task.options;
export const selectTasks = (state) => state.task.tasks; 
export const selectTask = (state) => state.task.task;

export default taskSlice.reducer;


