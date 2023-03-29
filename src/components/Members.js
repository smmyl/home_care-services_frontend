import axios from 'axios'
import {useState, useEffect} from 'react'
import EditMember from './members/Edit'
import AddMember from './members/Add'

const Members = () => {
const[members, setMembers] = useState([])
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


    return (
        <>
            <h1>Members</h1>
            <AddMember/>
            <EditMember/>
        </>
    )
}
export default Members