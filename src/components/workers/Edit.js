import axios from 'axios'
import {useState, useEffect} from 'react'

const EditWorker = (props) => {
    const [newName, setNewName] = useState()
    const [newAge, setNewAge] = useState()
    const [newLanguage, setNewLanguage] = useState()
    const [newImage, setNewImage] = useState()

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
        })
    }

    return (
        <>
            <form id = 'editWorkerForm' onSubmit = {handleEdit}>
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
            <button onClick = {() => {props.handleDeleteWorker(props.worker)}}>Delete</button>
            <button onClick = {() => {props.toggleEdit()}}>Cancel</button>
        </>
    )
}

export default EditWorker