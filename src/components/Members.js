import {useState} from 'react'
import EditMember from './members/Edit'
import Member from './Member'

const Members = (props) => {

    return (
        <div class='page'>
            <div class='members'>
                <div class='memberstop'>
                    <p>Our members appreciate the quality of service, ease of use and affordability that meet their needs and exceed their expectations. They value the personal attention, care, and support they receive from staff. </p>
                </div>
                {props.members.map((member) => {
                    return(
                        <Member
                            member={member}
                            getMembers={props.getMembers}
                            setMembers={props.setMembers}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Members