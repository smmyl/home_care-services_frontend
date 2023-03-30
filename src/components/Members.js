import axios from 'axios'
import {useState, useEffect} from 'react'
import EditMember from './members/Edit'

const Members = () => {
    const[members, setMembers] = useState([])
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }
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

    useEffect(() => {
       getMembers()
    }, [])

    return (
        <>
            <h1>Members</h1>
            {members.map((member) => {
            {edit ?
                <EditMember
                handleDeleteMember = {handleDeleteMember}
                getMembers = {getMembers}
                member = {member}
                /> 
                :
                <>
                    return(
                        <>
                            <p>Name:{member.name}</p> 
                        </>
                    )
                </>
            }})}
    </>
    )
}
export default Members