import {useState} from 'react'
import EditMember from './members/Edit'

const Members = (props) => {
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div class='page'>
            <div class='workers'>
                <div class='workerstop'>
                    <h3>Our members appreciate the quality of service, ease of use and affordability that meet their needs and exceed their expectations. They value the personal attention, care, and support they receive from staff. </h3>
                </div>
                <div class='workersinfo'>
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
                            <div class='workerinfo'>
                                <div class='workerinfoinfo'>
                                <h4>{member.name}</h4>
                                <p>Age: {member.age}</p>
                                <p>Family Members: {member.familyMember}</p>
                                <p>Languages: {member.language}</p>
                                <p>Address: {member.address}</p>
                                <p>Services Needed:</p>
                                {member.clean ?
                                    <>
                                        <p>Cleaning</p>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                                {member.food ?
                                    <>
                                        <p>Food Delivery</p>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                                {member.watch ?
                                    <>
                                        <p>Monitor</p>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                                <button onClick = {() => {toggleEdit()}}>Edit</button>
                                </div>
                                <div class='workerinfoimage'>
                                    <img src={member.image}></img>
                                </div>
                            </div>}
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Members