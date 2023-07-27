
// props = {
//     appTasks: [
//         {
//           id: 1,
//           title: "Groceries",
//           completed: false
//         },
//         {
//           id: 2,
//           title: "Car Repair",
//           completed: false
//         },
//         {
//           id: 3,
//           title: "Laundry",
//           completed: true
//         },
//         {
//           id: 4,
//           title: "Groceries again",
//           completed: true
//         }
//       ]
// }
export default function({ appTasks, handleChange }) {
    return (
        <div>
            <h3>To do</h3>
            {
                // const todoTasks = appTasks.filter(task => !task.completed);
                // const taskhtml = todoTasks.map(task => (
                //   <div id={task.id}><input type="checkbox" /><span>{task.title}</span></div>
                // ))
                appTasks
                .filter(task => !task.completed)
                .map(task => (
                <div id={task.id}><input onClick={() => {handleChange(task)}} checked={task.completed} type="checkbox" /><span>{task.title}</span></div>
                ))
            }
        </div>
    );
}