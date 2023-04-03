import {useState} from 'react'
import EditMember from './members/Edit'
import Member from './Member'

const Members = (props) => {

    return (
        <div class='page'>

            <div class='members'>
                <div class='memberstop'>
                    <p>Non sint praesentium qui iusto rerum vel obcaecati ipsam sed inventore molestiae aut perspiciatis repellendus et dolorem nobis et voluptatem sunt. Ad voluptatibus ullam et asperiores repellat non debitis atque ea modi repudiandae in nostrum sequi eos quam velit.</p>
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