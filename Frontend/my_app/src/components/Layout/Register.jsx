import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const clickToRegister = async (e) => {
        e.preventDefault()
        const response = await fetch(
            "https://fastapi-smarttodo-production.up.railway.app/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    username: userName,
                    password: password,
                    email: email

                }),

            });
        const data = await response.json();


        console.log(data);

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert(data.detail || "Registration failed");
        }
        // alert("Regisration successful!!")

    };



    return (
        <div>
            <form onSubmit={clickToRegister}>
                <div className="mb-3">
                    <label htmlFor="exampleInputname1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="exampleInputUserName" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* <button type="submit" className="btn btn-dark" onClick={clickToRegister}>Click To Register</button> */}
                <button type="submit" className="btn btn-dark"></button>
            </form>
        </div>
    )
}

export default Register
