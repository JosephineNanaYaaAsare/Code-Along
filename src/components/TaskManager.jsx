import React, {useState} from "react";
import TaskItem from "./TaskItem";


function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
        if (input === "") return;

        setTasks([input, ...tasks]);
        setInput("")
    }

        const handleDelete = (idx) => {
          const newTasks = tasks.filter((task) => task !== idx)
          setTasks(newTasks);
          }
    
        return( 
       <div className="h-screen w-screen bg-blue-400 flex justify-center items-center">
            <div className="max-w-xl bg-white rounded-xl px-5 py-10">
                <form 
                   className="space-x-5 flex w-[30rem] mb-10"
                    onSubmit={handleSubmit}>  
                    <input type="text" className="border-2 border-green-400 p-2 rounded-md outline-none w-10/12"
                     onChange={(e) => setInput(e.target.value)}
                     value={input} />
                    
                    <button type="submit" className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md" 
                     disabled={input === ""}>Add</button>
                     
                   </form>

                     <div className="space-y-2 overflow-auto h-56">
                    {tasks.map((task) => (
                         <TaskItem task={task} handleDelete={handleDelete} />
                      
                    ))}
                
                
                
                </div>   
            </div>    
        </div>
    )
}
export default TaskManager