import React,{useState} from 'react'
import axios from "axios"

function Login() {
    const [emailid,setEmailid]=useState("")
    const [password,setPassword]=useState("")
 

    async function login(e){
            e.preventDefault()


            try {
                    const loginData={
                        emailid,
                        password
                       
                    }

                    await axios.post("http://localhost:8000/auth/login",loginData)

            }
            catch{
                console.log('error')
            }
    }

    return (
        <div>
            <form onSubmit={login}>
            <input 
            type='email' 
            placeholder='enter email' 
            onChange={(e)=>setEmailid(e.target.value)}
            value={emailid}
            />
            <input type='password'
            placeholder='enter password' 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
           
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
