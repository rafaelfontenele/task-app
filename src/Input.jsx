


export function Input ( {newTask, setNewTask} ) {

    return (

        <input type="text" maxLength={40} className="task-input" value={newTask} onChange={(e) => {setNewTask(prev => e.target.value)}} placeholder="Insert task to added" />

    )
}