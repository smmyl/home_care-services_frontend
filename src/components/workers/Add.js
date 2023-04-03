import axios from 'axios'
import {useState, useEffect} from 'react'

const AddWorker = (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [language, setLanguage] = useState()
    const [image, setImage] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

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
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    //==Send data to MONGO
    const handleAddWorker = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/workers', {
            name: name,
            age: age,
            language: language,
            image: image,
            username: username,
            password: password
        }).then(() => {
            props.getWorkers()
            props.showWorkers()
        })
    }

    return (
        <div class = 'add'>
            <h2>Caretaker Sign Up Page</h2>
            <form onSubmit = {handleAddWorker}>
            <div class='addinputs'>
                <div class='addinput'>
                    <label htmlFor='name'> Name: </label>
                    <input type='text' name='name' onChange = {handleName} />
                </div>
                <div class='addinput' id='addage'>
                    <label htmlFor='age'> Age: </label>
                    <input type='number' name='age' onChange={handleAge} />
                </div>
                <div class='addinput'>
                    <label htmlFor='language'> Language: </label>
                    <input type='text' name='language' onChange={handleLanguage} />
                </div>
                <div class='addinput'>
                    <label htmlFor='image'> Image Url: </label>
                    <input type='text' name='image' onChange={handleImage} />
                </div>
                <div class='addinput'>
                    <label htmlFor='username'> Username: </label>
                    <input type='text' name='username' onChange={handleUsername} />
                </div>
                <div class='addinput'>
                    <label htmlFor='password'> Password: </label>
                    <input type='text' name='password' onChange={handlePassword} />
                </div>
            </div>
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default AddWorker