import axios from 'axios'
import {useState, useEffect} from 'react'
import EditMember from './members/Edit'

const Members = (props) => {
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    //==Delete Function for Data
    const handleDeleteMember = (data) => {
        axios.delete(`http://localhost:3000/members/${data._id}`).then(() => {
        axios.get('http://localhost:3000/members').then((response) => {
            props.setMembers(response.data)
            })
        })
    }

    return (
        <>
            <h1>Members</h1>
            {props.members.map((member) => {
                return(
                    <>
                    {edit ?
                        <EditMember
                            handleDeleteMember = {handleDeleteMember}
                            getMembers = {props.getMembers}
                            member = {member}
                            toggleEdit = {toggleEdit}
                            setEdit = {setEdit}
                        /> 
                        :
                        <>
                            <p>Name:{member.name}</p>
                            <button onClick = {() => {toggleEdit()}}>Edit</button>
                        </>
                    }
                    </>)
            })}
        </>
    )
}
export default Members