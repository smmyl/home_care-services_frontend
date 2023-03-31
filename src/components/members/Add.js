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
        <div class='addmembers'>
            <h2>Member Sign Up Page</h2>
            <form onSubmit = {handleAddMember}>
                <div class='addmemberinputs'>
                <div class='addmemberinput'>
                    <label htmlFor='name'> Name: </label>
                    <input type='text' name='name' onChange = {handleName} />
                </div>
                <div class='addmemberinput' id='addmemberage'>
                    <label htmlFor='age'> Age: </label>
                    <input type='number' name='age' onChange={handleAge} />
                </div>
                <div class='addmemberinput'>
                    <label htmlFor='familyMember'> Main Contact: </label>
                    <input type='text' name='familyMember' onChange={handleFamilyMember} />
                </div>
                <div class='addmemberinput'>
                    <label htmlFor='language'> Language: </label>
                    <input type='text' name='language' onChange={handleLanguage} />
                </div>
                <div class='addmemberinput' id='addmemberaddress'>
                    <label htmlFor='address'> Address: </label>
                    <input type='text' name='address' onChange={handleAddress} />
                </div>
                </div>
                <div class='addmemberservices'>
                    <p>Services:</p>
                    <div class='addmemberservicesinput'>
                        <label htmlFor='clean'> Cleaning: </label>
                        <input type='checkbox' name='clean' value = 'true' onChange={handleClean}/>
                    </div>
                    <div class='addmemberservicesinput'>
                        <label htmlFor='clean'> Food Delivery: </label>
                        <input type='checkbox' name='clean' value = 'true' onChange={handleFood}/>
                    </div>
                    <div class='addmemberservicesinput'>
                        <label htmlFor='watch'> Monitor: </label>
                        <input type='checkbox' name='watch' value = 'true' onChange={handleWatch}/>
                    </div>
                </div>
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default AddMember
