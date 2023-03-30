import axios from 'axios'
import {useState, useEffect} from 'react'

const AddMember = (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [language, setLanguage] = useState()
    const [familyMember, setFamilyMember] = useState()
    const [address, setAddress] = useState()
    const [clean, setClean] = useState(false)
    const [food, setFood] = useState(false)
    const [watch, setWatch] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleAge = (event) => {
        setAge(event.target.value)
    }
    const handleLanguage = (event) => {
        setLanguage(event.target.value)
    }
    const handleFamilyMember = (event) => {
        setFamilyMember(event.target.value)
    }
    const handleClean = (event) => {
        setClean(event.target.value)
    }
    const handleFood = (event) => {
        setFood(event.target.value)
    }
    const handleWatch = (event) => {
        setWatch(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }

    //==Send data to MONGO
    const handleAddMember = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/members', {
            name: name,
            age: age,
            language: language,
            familyMember: familyMember,
                clean: clean,
                food: food,
                watch: watch,
            address: address
        }).then(() => {
            props.setAdd(false)
            props.getMembers()
        })
    }

    return (
        <>
            <h3>Add Member</h3>
            <form onSubmit = {handleAddMember}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange = {handleName} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={handleAge} />
                <br/>
                <br/>
                <label htmlFor='familyMember'>Main Contact:</label>
                <input type='text' name='familyMember' onChange={handleFamilyMember} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={handleLanguage} />
                <br/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input type='text' name='address' onChange={handleAddress} />
                <br/>
                <p>Services:</p>
                <label htmlFor='clean'>Cleaning:</label>
                <input type='checkbox' name='clean' value = 'true' onChange={handleClean}/>
                <br/>
                <br/>
                <label htmlFor='clean'>Food Delivery:</label>
                <input type='checkbox' name='clean' value = 'true' onChange={handleFood}/>
                <br/>
                <br/>
                <label htmlFor='watch'>Monitor:</label>
                <input type='checkbox' name='watch' value = 'true' onChange={handleWatch}/>
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </>
    )
}

export default AddMember
