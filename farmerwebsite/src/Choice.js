import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Choice.css'
import Routing from "./Routing"

function Choice() {
    return (
        <div className="holder">
            <div className="choices">
                <img src="farmerpic.png " alt=""></img>
                <Button color="primary" variant="contained" onClick={<Routing/>}>Login / Sign Up</Button>
            </div>
            <div className="choices">
                <img src="buisness.png " alt=""></img>
                <Button color="primary" variant="contained">Login / Sign Up</Button>
            </div>
            <div className="choices">
                <img src="truck.png " alt=""></img>
                <Button color="primary" variant="contained">Login / Sign Up</Button>
            </div>
            
        </div>
    )
}

export default Choice
