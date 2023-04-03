import axios from 'axios'
import {useState} from 'react'

const Workers = (props) => {
    const [edit, setEdit] = useState(false)
    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newLanguage, setNewLanguage] = useState('')
    const [newImage, setNewImage] = useState('')

    const toggleEdit = () => {
        setEdit(!edit)
    }

    //==Delete Function for Data
    const handleDeleteWorker = (data) => {
        console.log(data._id)
        axios.delete(`http://localhost:3000/workers/${data._id}`).then(() => {
        axios.get('http://localhost:3000/workers').then((response) => {
            props.setWorkers(response.data)
        })
        })
    }
    const handleEdit = (event, worker) => {
        event.preventDefault()
        console.log(worker._id)
        axios.put(`http://localhost:3000/workers/${worker._id}`, {
            name: newName,
            age: newAge,
            language: newLanguage,
            image: newImage
        }).then ((response) => {
            console.log(response.data)
            props.getWorkers(response.data)
        })
    }
    const handleNameUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleAgeUpdate = (event) => {
        setNewAge(event.target.value)
    }
    const handleLanguageUpdate = (event) => {
        setNewLanguage(event.target.value)
    }
    const handleImageUpdate = (event) => {
        setNewImage(event.target.value)
    }



  return (
    <div class='page'>
        <div class='workers'>
            <div class='workerstop'>
            <h3>"Caring for seniors is a highly rewarding experience as it allows employees to build strong relationships with those they serve and make a positive impact on their lives."
                           <h4>- Kyle (former employee)</h4> 
                        </h3>
            </div>
            <div class='workersinfo'>
            {props.workers.map((worker) => {
                return(
                    <>
                    {edit ?
                        <>
                        <h2>Edit</h2>
                        <form id = 'editWorkerForm' onSubmit={handleEdit}>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' onChange={handleNameUpdate} />
                            <br/>
                            <br/>
                            <label htmlFor='age'>Age:</label>
                            <input type='number' name='age' onChange={handleAgeUpdate} />
                            <br/>
                            <br/>
                            <label htmlFor='language'>Language:</label>
                            <input type='text' name='language' onChange={handleLanguageUpdate} />
                            <br/>
                            <br/>
                            <label htmlFor='image'>Image URL:</label>
                            <input type='text' name='image' onChange={handleImageUpdate} />
                            <br/>
                            <br/>
                        </form>
                        <button type = 'submit' form = 'editWorkerForm'>Update</button>
                        <button onClick = {() => {handleDeleteWorker(worker)}}>Delete</button>
                        <button onClick = {() => {toggleEdit()}}>Cancel</button>
                        </>
                        :
                        <div class='workerinfo'>
                            <div class='workerinfoinfo'>
                                <h4>{worker.name}</h4>
                                <p>Age: {worker.age}</p>
                                <p>Language: {worker.language}</p>
                                <button onClick = {() => {toggleEdit()}}>Edit</button>
                            </div>
                            <div class='workerinfoimage'>
                                <img src={worker.image}></img>
                            </div>
                        </div>
                    }
                    </>
                )
            })}
            </div>
        </div>
    </div>
    )
}
export default Workers