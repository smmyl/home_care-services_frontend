import axios from 'axios'
import {useState, useEffect} from 'react'

const AddWorker = (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [language, setLanguage] = useState()
    const [image, setImage] = useState()

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleAge = (event) => {
        setAge(event.target.value)
    }
    const handleLanguage = (event) => {
        setLanguage(event.target.value)
    }
    const handleImage = (event) => {
        setImage(event.target.value)
    }
    //==Send data to MONGO
    const handleAddWorker = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/workers', {
            name: name,
            age: age,
            language: language,
            image: image
        }).then(() => {
            props.getWorkers()
        })
    }

    return (
        <>
            <h1>Add Worker</h1>
        </>
    )
}

export default AddWorker