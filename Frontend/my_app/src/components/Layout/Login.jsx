import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
 const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch("https://fastapi-smarttodo-production.up.railway.app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userName,
                password: password

            }),

        });
        const data = await response.json();
        console.log(data);
     
        if (response.ok) {

      localStorage.setItem("token", data.access_token)
        console.log(
    "SAVED TOKEN:",
    localStorage.getItem("token"));
 localStorage.setItem("username", userName);
  
         navigate("/dashboard",  {
        state: {
            data: data,
            username: userName
        } });
   
} else {

    alert(data.detail)

}
     
    };
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputname1" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="button" className="btn btn-dark" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login
