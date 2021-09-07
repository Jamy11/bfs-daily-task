import React,{useState} from 'react'

const AddTask = ({addNewTask}) => {

    const [inputVal, setInputVal] = useState({
        task:''
    })

    const checkValue = (e)=> {
        setInputVal({...inputVal,[e.target.name]:e.target.value})
    }

    function addTask(){
        addNewTask({...inputVal,id:Math.floor(Math.random() * 10000)});
    }
    // console.log(inputVal);
    return (
        <div>
            <label htmlFor="">Add Task </label>
            <input type="text" name='task' onChange={checkValue}/><span>&nbsp;</span>
            <button onClick={addTask}> Add Task</button>
        </div>
    )
}

export default AddTask
