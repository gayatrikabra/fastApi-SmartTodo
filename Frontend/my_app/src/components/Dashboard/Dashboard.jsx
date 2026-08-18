// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


// function Dashboard() {
//     const location = useLocation();
//     const data = location.state;
//      const navigate = useNavigate();
//   const username = localStorage.getItem("username");

// return (
//     <div className="container vh-100 d-flex flex-column align-items-center pt-5">

       

//         {data ? (
//             <>
//                 <h2 className="text-center text-success mb-5">
//                     {/* Welcome {data.username} */}
//                     Welcome {username}
//                 </h2>

//            <div className="d-flex gap-5 flex-wrap justify-content-center">
//     <button className="btn btn-primary px-4"   onClick={() => navigate('/add')}>
//         Add Task
//     </button>

//     <button className="btn btn-success px-4"  onClick={() => navigate('/edit')}>
//         Edit Task
//     </button>

//     <button className="btn btn-danger px-4" onClick={() => navigate('/delete')}>
//         Delete Task
//     </button>

//     <button className="btn btn-warning px-4" onClick={() => navigate('/show')}>
//         Show Task
//     </button>
// </div>
            
//             </>
//         ) : (
//             <h2 className="text-center text-danger mt-5">
//                 Username or Password incorrect
//             </h2>
//         )}

//     </div>
// )
// }

// export default Dashboard


import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className="container vh-100 d-flex flex-column align-items-center pt-5">

      {username ? (
        <>
          <h2 className="text-center text-success mb-5">
            Welcome {username}
          </h2>

          <div className="d-flex gap-5 flex-wrap justify-content-center">

            <button
              className="btn btn-primary px-4"
              onClick={() => navigate("/add")}
            >
              Add Task
            </button>

            <button
              className="btn btn-success px-4"
              onClick={() => navigate("/edit")}
            >
              Edit Task
            </button>

            <button
              className="btn btn-danger px-4"
              onClick={() => navigate("/delete")}
            >
              Delete Task
            </button>

            <button
              className="btn btn-warning px-4"
              onClick={() => navigate("/show")}
            >
              Show Task
            </button>

          </div>
        </>
      ) : (
        <h2 className="text-center text-danger mt-5">
          Please login first
        </h2>
      )}

    </div>
  );
}

export default Dashboard;





