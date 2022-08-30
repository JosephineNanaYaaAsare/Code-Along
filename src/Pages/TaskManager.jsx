import React, {useEffect, useState} from "react";
import TaskItem from "../components/TaskItem";
import {v4 as uuid} from "uuid"
import { useTaskContext } from "../Context/tasksContext";


    // const getTasksFromLocalStorage = () => {
    //     // get tasks from local storage
    //  const tasks = localStorage.getItem("tasks")
    //  if (!tasks) return []
    //  return JSON.parse(tasks)
    // }

    function TaskManager() {
        const {tasks, setValue} = useTaskContext();
        const [input, setInput] = useState("");
    

     const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") return;

        const newTask ={
            id: uuid(),
            text: input,
            completed: false,
        };

        setValue([newTask, ...tasks]);
        setInput("")
    }

        const handleDelete = (id) => {
          const newTasks = tasks.filter((task) => task.id !== id)
          setValue(newTasks);
        }

        const handleCompleted = (id) => {
          const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }  
             return task;
            });
            setValue(newTasks)
        }

        const handleEdit = (id) => {
            const newTasks = tasks.filter((task) =>{
                if (task.id === id) {
                    setInput(task.text);
                    return false;
                }  
                    return task;
            });
            setValue(newTasks);
        }
    


        useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
        }, [tasks])
        
        // map runs through the items in the arrays, map returns array but loop
        return( 
       <div className="h-screen w-screen bg-blue-400 flex justify-center items-center">
            <div className="max-w-xl bg-white rounded-xl px-5 py-10">
                <form 
                   className="space-x-5 flex w-[30rem] mb-10"
                    onSubmit={handleSubmit} > 
                    <input type="text" className="border-2 border-green-400 p-2 rounded-md outline-none w-10/12"
                     onChange={(e) => setInput(e.target.value)}
                     value={input} />
                    
                    <button type="submit" className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md" 
                     disabled={input === ""}>Add</button>
                     
                   </form>

                     <div className="space-y-2 overflow-auto h-56">
                       {tasks.map((task) => (
                         <TaskItem
                         key={task.id} 
                         task={task} 
                         handleDelete={handleDelete} 
                         handleCompleted={handleCompleted}
                         handleEdit={handleEdit}
                         />
                    ))}
                
                
                
                </div>   
            </div>    
        </div>
    )
}

export default TaskManager;