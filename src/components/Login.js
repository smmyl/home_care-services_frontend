import axios from 'axios'
import {useState, useEffect} from 'react'
import AddMember from './members/Add'
import AddWorker from './workers/Add'

const Login = (props) => {

    return (
        <div class='page'>
            <h2>Login</h2>
            <h2>Sign Up</h2>
            <AddMember
                getMembers = {props.getMembers}
            />
            <AddWorker/>
        </div>
    )
}

export default Login
