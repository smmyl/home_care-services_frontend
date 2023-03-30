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
            <h1>Edit Worker</h1>
        </>
    )
}

export default EditWorker