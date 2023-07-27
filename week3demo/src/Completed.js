export default function({ appTasks, handleChange }) {
    return (
        <div>
            <h3>Completed</h3>
            {
                // const todoTasks = appTasks.filter(task => !task.completed);
                // const taskhtml = todoTasks.map(task => (
                //   <div id={task.id}><input type="checkbox" /><span>{task.title}</span></div>
                // ))
                appTasks
                .filter(task => task.completed)
                .map(task => (
                <div id={task.id}><input onClick={() => handleChange(task)} checked={task.completed} type="checkbox" /><span>{task.title}</span></div>
                ))
            }
        </div>
    );
}