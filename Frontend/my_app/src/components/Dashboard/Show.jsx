import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Show() {
  // const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", localStorage.getItem("token"));
    fetch(`https://https://fastapi-smarttodo-production.up.railway.app/tasks/show`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
         Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // runs only once when page loads

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;




  return (

    <div className="container mt-5">
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task, index) => (


          <div className="card mb-3 shadow-sm" key={index}>

            <div className="card-header d-flex justify-content-between">
              <span>Status: <strong>{task.status}</strong></span>
              <span className="badge bg-primary">{task.priority}</span>
            </div>

            <div className="card-body">

              <div className="mb-2">
                <span className="text-muted">Title:</span>
                <div><strong>{task.title}</strong></div>
              </div>

              <div className="mb-2">
                <span className="text-muted">Description:</span>
                <div>{task.description}</div>
              </div>

              <div className="mb-2">
                <span className="text-muted">Due Date:</span>
                <div>{task.due_date || "Not set"}</div>
              </div>

            </div>



          </div>
        ))
      )}

      
    </div>
  )
}

export default Show

