import axios from 'axios'
import {useState, useEffect} from 'react'

const EditWorker = (props) => {

    return (
        <>
            <h1>Edit Worker</h1>
            <form onSubmit={}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={} value={worker.name}/>
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={} value={worker.age}/>
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={} value={worker.language}/>
                <br/>
                <br/>
                <label htmlFor='image'>Image:</label>
                <input type='text' name='image' onChange={} value={worker.image}/>
                <br/>
                <br/>
                <input type="submit" value="Edit Worker"/>
            </form>
        </>
    )
}

export default EditWorker