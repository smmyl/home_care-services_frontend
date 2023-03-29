import axios from 'axios'
import {useState, useEffect} from 'react'
import EditMembers from './members/Edit'
import AddMembers from './members/Add'

const[members, setMembers] = useState([])

const Members = () => {
    //==Get Data
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


    return (
        <>
            <h1>Members</h1>
            <AddMembers/>
            <EditMembers/>
        </>
    )
}
export default Members