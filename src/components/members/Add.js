import axios from 'axios'
import {useState, useEffect} from 'react'

const AddMember = (props) => {

    return (
        <>
            <h1>Add Member</h1>
            <form onSubmit={}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={} />
                <br/>
                <br/>
                <label htmlFor='familyMember'>Family Member:</label>
                <input type='text' name='familyMember' onChange={} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={} />
                <br/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input type='text' name='address' onChange={} />
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </>
    )
}

export default AddMember
