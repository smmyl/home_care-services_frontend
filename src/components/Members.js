import {useState} from 'react'
import EditMember from './members/Edit'

const Members = (props) => {
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return (
        <>
            <h1>Members</h1>
            {props.members.map((member) => {
                return(
                <div>
                    {edit ?
                        <>
                        <h2>Edit</h2>
                        <EditMember
                            setMembers = {props.setMembers}
                            getMembers = {props.getMembers}
                            member = {member}
                            toggleEdit = {toggleEdit}
                            setEdit = {setEdit}
                        /> 
                        </>
                        :
                        <>
                            <h4>{member.name}</h4>
                            <p>Age: {member.age}</p>
                            <p>Family Members: {member.familyMember}</p>
                            <p>Languages: {member.language}</p>
                            <p>Address: {member.address}</p>
                            <button onClick = {() => {toggleEdit()}}>Edit</button>
                        </>}
                </div>
                )
            })}
        </>
    )
}
export default Members