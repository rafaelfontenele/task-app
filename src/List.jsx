

export function List ( {taskList, setTaskList}  ) {

const deleteTask = (taskToDeleteId) => {
    setTaskList( prev => {
        return prev.filter( item => item.id !== taskToDeleteId)
    })
}
    return (

        <div className="list">

            {taskList.map( task => {
                return (
                    <div key={task.id} className="task-item">

                        {task.name}

                        <button className="delete-task-btn" onClick={(e) => deleteTask(task.id)}>DELETE</button>
                    </div>
                )
            })}

        </div>

    )
}