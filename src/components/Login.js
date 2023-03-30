import axios from 'axios'
import {useState, useEffect} from 'react'
import AddMember from './members/Add'
import AddWorker from './workers/Add'

const Login = () => {

    return (
        <>

            <h2>Login</h2>
            <h2>Sign Up</h2>
            <AddMember/>
            <AddWorker/>
        </>
    )
}

export default Login
