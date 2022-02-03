// actions and reducers
// createSlice --> helps to create reducers 
// createAsyncThunk --> helps to create action
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import axios from 'axios';


// create action
export const fetchReposAction = createAsyncThunk('repos/list', async (user, {rejectWithValue, getState, dispatch}) => {
    try{
        // make the http call
        const {data} = await axios.get(`https://api.github.com/users/${user}/repos?per_page=30&sort=asc`);
        return data;
    }catch(error){
        
    }
});