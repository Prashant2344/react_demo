import { createAsyncThunk } from "@reduxjs/toolkit";

/*Fetches the test list*/

export const fetchTestList = createAsyncThunk('getTestList', async (params) => {
    debugger
    const response = await axiosFetch.get('test/list',{
        params: params
    })
    return response.data.success ? response.data.data : []
})