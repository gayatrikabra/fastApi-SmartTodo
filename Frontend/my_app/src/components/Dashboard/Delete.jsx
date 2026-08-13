import React, { useState } from 'react'

function Delete() {

    const [taskId, setTaskId] = useState("")

    const handleDelete = async (e) => {

        e.preventDefault()

        const token = localStorage.getItem("token")

        const response = await  fetch(`https://fastapi-smarttodo-production.up.railway.app/tasks/delete/${taskId}`, 
            {
                method: "DELETE",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )

        let data = null

        try {

            data = await response.json()

        } catch {

            console.log("No JSON response")
        }

        console.log(data)

        if (response.ok) {

            alert("Task Deleted Successfully")

            setTaskId("")

        } else {

            alert(data?.detail || "Delete Failed")
        }
    }

    return (

        <div className="container mt-5">

            <div
                className="card shadow p-4 mx-auto"
                style={{ maxWidth: "500px" }}
            >

                <h2 className="text-center text-danger mb-4">
                    Delete Task
                </h2>

                <form onSubmit={handleDelete}>

                    <div className="mb-4">

                        <label className="form-label">
                            Enter Task ID
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Task ID"
                            value={taskId}
                            onChange={(e) => setTaskId(e.target.value)}
                            required
                        />

                    </div>

                    <div className="d-grid">

                        <button
                            type="submit"
                            className="btn btn-danger"
                        >
                            Delete Task
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Delete