import axios from 'axios'
import {useState, useEffect} from 'react'
import AddMember from './members/Add'
import AddWorker from './workers/Add'

const Signup = (props) => {
    const [clickMem, setMem] = useState(false)
    const [clickWork, setWork] = useState(false)

    const showMem = () => {
        setMem(true)
        setWork(false)
    }

    const showWork = () => {
        setMem(false)
        setWork(true)
    }

    return (
        <div class='page'>
            <h2>Are you signing up or joining the team?</h2>
            <button onClick={showMem}>Member</button>
            <button onClick={showWork}>Employee</button>

            {clickMem ? (<AddMember
                getMembers = {props.getMembers}
            />) : null}
            {clickWork? <AddWorker/> : null}
            
        </div>
    )
}

export default Signup