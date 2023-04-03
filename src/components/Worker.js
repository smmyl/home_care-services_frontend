import {useState, useEffect} from 'react'
import axios from 'axios'

const Worker = (props) => {
    const [edit, setEdit] = useState(false)
    const [newName, setNewName] = useState()
    const [newAge, setNewAge] = useState()
    const [newLanguage, setNewLanguage] = useState()
    const [newImage, setNewImage] = useState()

    const toggleEdit = () => {
        setEdit(!edit)
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

    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/workers/${props.worker._id}`, {
            name: newName,
            age: newAge,
            language: newLanguage,
            image: newImage
        }).then (() => {
            props.getWorkers()
            toggleEdit()
        })
    }

    return (
        <>
        {edit ?
            <div class='workerinfo'>
                <div class='workereditinfo'>
                    <h2>Edit</h2>
                    <form id = 'editWorkerForm' onSubmit={handleEdit}>
                        <label htmlFor='name'> Name: </label>
                        <input type='text' name='name' placeholder={props.worker.name} onChange={handleNameUpdate} />
                        <br/>
                        <br/>
                        <label htmlFor='age'> Age: </label>
                        <input type='number' name='age' placeholder={props.worker.age} onChange={handleAgeUpdate} />
                        <br/>
                        <br/>
                        <label htmlFor='language'> Language: </label>
                        <input type='text' name='language' placeholder={props.worker.language} onChange={handleLanguageUpdate} />
                        <br/>
                        <br/>
                        <label htmlFor='image'> Image URL: </label>
                        <input type='text' name='image' placeholder={props.worker.image} onChange={handleImageUpdate} />
                        <br/>
                        <br/>
                    </form>
                </div>
                <div class='workereditbtn'>
                    <button type = 'submit' form = 'editWorkerForm'>Update</button>
                    <button onClick = {() => {props.handleDeleteWorker(props.worker)}}>Delete</button>
                    <button onClick = {() => {toggleEdit()}}>Cancel</button>
                </div>
            </div>
            :
            <div class='workerinfo'>
                <div class='workerinfoinfo'>
                    <h4>{props.worker.name}</h4>
                    <p>Age: {props.worker.age}</p>
                    <p>Language: {props.worker.language}</p>
                    <button onClick = {() => {toggleEdit()}}>Edit</button>
                </div>                                                               
                <div class='workerinfoimage'>
                    <img src={props.worker.image}></img>
                </div>
            </div>
        }
        </>
    )
}

export default Worker