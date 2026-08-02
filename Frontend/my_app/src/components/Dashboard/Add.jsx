import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Add() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [status, setStatus] = useState(false)
    const [priority, setPriority] = useState("Select Priority");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")


        const response = await fetch("http://127.0.0.1:8000/tasks/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                description,
                priority,
                dueDate,
                status

            }),

        });
        const data = await response.json();
        console.log(data);
       
  if (response.ok) {

      //localStorage.setItem("token", data.access_token)
  
         navigate("/dashboard",  {
        state: {
            data: data,
        } });
   
} else {

    alert(data.detail)

}
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle1" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Description" id="floatingTextarea" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label htmlFor="floatingTextarea">Description</label>
                    </div>
                </div>


                <div className="mb-3">
                    <label className="form-label">Select Date</label>

                    <input
                        type="date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={status === "Completed"}

                            onChange={(e) =>
                                setStatus(
                                    e.target.checked
                                        ? "Completed"
                                        : "Not Completed"
                                )
                            }
                         />
                        <label className="form-check-label" htmlFor="switchCheckDefault">Is Completed</label>
                        <h5 className="mt-3">
                            Status : {status}
                        </h5>
                    </div>

                </div>

                <div className="mb-3 form-check">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {priority}
                        </button>
                        <ul className="dropdown-menu">

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item"
                                    onClick={() => setPriority("High")}
                                >
                                    High
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item"
                                    onClick={() => setPriority("Medium")}
                                >
                                    Medium
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item"
                                    onClick={() => setPriority("Low")}
                                >
                                    Low
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" >Add Task</button>
            </form>
        </div>
    )
}

export default Add
