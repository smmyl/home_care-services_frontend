import axios from 'axios'
import {useState, useEffect} from 'react'

const EditWorker = (props) => {

    const handleNameUpdate = (event) => {
        props.setNewName(event.target.value)
    }
    const handleAgeUpdate = (event) => {
        props.setNewAge(event.target.value)
    }
    const handleLanguageUpdate = (event) => {
        props.setNewLanguage(event.target.value)
    }
    const handleImageUpdate = (event) => {
        props.setNewImage(event.target.value)
    }

    return (
        <>
            <form id = 'editWorkerForm' onSubmit = {()=>{props.handleEdit(props.worker)}}>
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