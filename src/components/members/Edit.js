import axios from 'axios'
import {useState, useEffect} from 'react'

const EditMember = (props) => {

    return (
        <>
            <h1>Edit Member</h1>
            <form onSubmit={}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={} value={member.name}/>
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={} value={member.age}/>
                <br/>
                <br/>
                <label htmlFor='familyMember'>Family Member:</label>
                <input type='text' name='familyMember' onChange={} value={member.familyMember}/>
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={} value={member.language} />
                <br/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input type='text' name='address' onChange={} value={member.address}/>
                <br/>
                <br/>
                <input type="submit" value="Edit Member"/>
            </form>
        </>
    )
}

export default EditMember