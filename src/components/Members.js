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
                    <p>Non sint praesentium qui iusto rerum vel obcaecati ipsam sed inventore molestiae aut perspiciatis repellendus et dolorem nobis et voluptatem sunt. Ad voluptatibus ullam et asperiores repellat non debitis atque ea modi repudiandae in nostrum sequi eos quam velit.</p>
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