import axios from 'axios'
import {useState, useEffect} from 'react'
import EditMember from './members/Edit'
import AddMember from './members/Add'

const Members = () => {
const[members, setMembers] = useState([])
const[add, setAdd] = useState(false)

    // ==Get Data
    const getMembers = () => {
        axios.get('http://localhost:3000/members').then((response) => {
            setMembers(response.data)
        })
    }

    //==Delete Function for Data
    const handleDeleteMember = (data) => {
        axios.delete(`http://localhost:3000/members/${data._id}`).then(() => {
        axios.get('http://localhost:3000/members').then((response) => {
            setMembers(response.data)
            })
        })
    }

    const addMember = () => {
        setAdd(!add)
    }

    useEffect(() => {
       getMembers()
    }, [])

    return (
        <>
            <h1>Members</h1>
            {add ?
            <>
                <h2>Sign Up</h2>
                <button onClick = {addMember}>Go Back</button>
                <AddMember
                addMember = {addMember}
                getMembers = {getMembers}
                />
            </>
            :
            <>
                <h2>Current Members</h2>
                <button onClick = {addMember}>Sign Up</button>
                <EditMember
                handleDeleteMember = {handleDeleteMember}
                getMembers = {getMembers}
                />
            </>
            }   
        </>
    )
}
export default Members