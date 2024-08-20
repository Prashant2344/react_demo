import { createReducer } from "@reduxjs/toolkit";
import { fetchTestList } from "../../actions/test/testlist";

let initialState = {
    loading: false,
    tests: []
}

const testReducer = createReducer(initialState,(builder) =>{
    builder
        .addCase(fetchTestList.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(fetchTestList.fulfilled, (state,action)=>{
            state.tests = action.payload
            state.loading = false
        })
        .addCase(fetchTestList.rejected,(state,action)=>{
            state.loading = false
        })
})

export default testReducer