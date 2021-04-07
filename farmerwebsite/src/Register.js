import React,{useState} from 'react'
import axios from "axios"

function Register() {
    const [emailid,setEmailid]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")

    async function register(e){
            e.preventDefault()


            try {
                    const registerData={
                        emailid,
                        password,
                        cpassword
                    }

                    await axios.post("http://localhost:8000/auth/",registerData)

            }
            catch{
                console.log('error')
            }
    }

    return (
        <div>
            <form onSubmit={register}>
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
            <input type='password' 
            placeholder='confirm password'
            onChange={(e)=>setCpassword(e.target.value)}
            value={cpassword}
            />
            <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
