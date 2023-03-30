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
            <h1>Add Member</h1>
        </>
    )
}

export default AddMember
