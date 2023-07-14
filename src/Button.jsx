


export function Button ( {newTask, setNewTask, setTaskList} ) {

    const addNewTask = ( newTask ) => {
        if (newTask.length == 0) return;

        setTaskList( prev => {
            return [
                ...prev,
                {id: prev.length, name: newTask}
            ]
        })
        setNewTask( prev => '');
    }
    
    return (


        <button className="add-task-btn" onClick={() => {
            addNewTask(newTask)
        }}>Add Task</button>
    )
}