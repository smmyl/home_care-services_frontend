import axios from 'axios'
import {useState, useEffect} from 'react'

const AddWorker = (props) => {

    return (
        <>
            <h1>Add Worker</h1>
            <form onSubmit={}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={} />
                <br/>
                <br/>
                <label htmlFor='image'>Image:</label>
                <input type='text' name='image' onChange={} />
                <br/>
                <br/>
                <input type="submit" value="Add Worker"/>
            </form>
        </>
    )
}

export default AddWorker