import React from 'react'

const Task = ({task,deleteTask}) => {
    return (
        <div>
            <h1>{task.task} &nbsp;<span style={{color:'red'}} onClick={()=>deleteTask(task.id)}>x</span></h1>
        </div>
    )
}

export default Task
