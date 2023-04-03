import {useState} from 'react'
import EditMember from './members/Edit'

const Member = (props) => {
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }
    return (
        <div>
            {edit ?
                <>
                    <EditMember
                        setMembers = {props.setMembers}
                        getMembers = {props.getMembers}
                        member = {props.member}
                        toggleEdit = {toggleEdit}
                        setEdit = {setEdit}
                    /> 
                </>
                :
                <div class='membersinfo'>
                    <div class='membersinfoinfo'>
                    <h4>{props.member.name}</h4>
                    <p>Age: {props.member.age}</p>
                    <p>Family Members: {props.member.familyMember}</p>
                    <p>Languages: {props.member.language}</p>
                    <p>Address: {props.member.address}</p>
                    <p>Services Needed:</p>
                    {props.member.clean ?
                        <>
                            <p>Cleaning</p>
                        </>
                        :
                        <>
                        </>
                    }
                    {props.member.food ?
                        <>
                            <p>Food Delivery</p>
                        </>
                        :
                        <>
                        </>
                    }
                    {props.member.watch ?
                        <>
                            <p>Monitor</p>
                        </>
                        :
                        <>
                        </>
                    }
                    <button onClick = {() => {toggleEdit()}}>Edit</button>
                    </div>
                    <div class='membersinfoimage'>
                        <img src={props.member.image}></img>
                    </div>
                </div>}
        </div>)
}

export default Member