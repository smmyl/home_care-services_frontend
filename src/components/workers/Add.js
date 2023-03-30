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
            <h3>Add Worker</h3>
            <form onSubmit = {handleAddWorker}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange = {handleName} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={handleAge} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={handleLanguage} />
                <br/>
                <br/>
                <label htmlFor='image'>Image Url:</label>
                <input type='text' name='image' onChange={handleImage} />
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </>
    )
}

export default AddWorker