import React,{Fragment, useEffect} from "react";
import ReactCollapsingTable from 'react-collapsing-table';
import AppLayout from "../../layouts/AppLayout";
import { fetchTestList } from "../../store/actions/test/testlist";
import { useDispatch,useSelector } from "react-redux";

const TestList = () => {

    const { tests } = useSelector(
        (store) => store.testListReducer.testReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        renderTaskList();
    },[]);

    const renderTaskList = () => {
        dispatch(fetchTestList());
    }


    // const fetchData = () =>{
    //     renderTaskList();
    // }

    const rows = [
        { id: 1, name: 'Paul', print_name: 'Darragh', },
        { id: 2, name: 'Steven', print_name: 'Smith', }
    ]
    let columns = [
        { accessor: 'name', label: 'First Name', priorityLevel: 1, position: 1, minWidth: 150, sortable: true},
        { accessor: 'print_name', label: 'Last Name', priorityLevel: 2, position: 2, minWidth: 150, sortable: true },
    ]

    return (
        <div>
            <AppLayout>
                <Fragment>
                    <ReactCollapsingTable rows={tests ? tests : ""} columns={columns} />
                    {/* <button type="submit" onClick={fetchData}>Get Data</button> */}
                    {/* {tests.map(test=>{
                        return <pre>{JSON.stringify(test)}</pre>
                    })} */}
                </Fragment>
            </AppLayout>
        </div>
    )
};

export default TestList;
