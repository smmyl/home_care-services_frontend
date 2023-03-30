import axios from 'axios'
import {useState, useEffect} from 'react'

const EditMember = (props) => {
    const [newName, setNewName] = useState()
    const [newAge, setNewAge] = useState()
    const [newLanguage, setNewLanguage] = useState()
    const [newFamilyMember, setNewFamilyMember] = useState()
    const [newClean, setNewClean] = useState()
    const [newFood, setNewFood] = useState()
    const [newWatch, setNewWatch] = useState()
    const [newAddress, setNewAddress] = useState()

    const handleNameUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleAgeUpdate = (event) => {
        setNewAge(event.target.value)
    }
    const handleLanguageUpdate = (event) => {
        setNewLanguage(event.target.value)
    }
    const handleFamilyMemberUpdate = (event) => {
        setNewFamilyMember(event.target.value)
    }
    const handleCleanUpdate = (event) => {
        setNewClean(event.target.value)
    }
    const handleFoodUpdate = (event) => {
        setNewFood(event.target.value)
    }
    const handleWatchUpdate = (event) => {
        setNewWatch(event.target.value)
    }
    const handleAddressUpdate = (event) => {
        setNewAddress(event.target.value)
    }

    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/members/${props.member._id}`, {
            name: newName,
            age: newAge,
            language: newLanguage,
            familyMember: newFamilyMember,
            services: {
                clean: newClean,
                food: newFood,
                watch: newWatch
            },
                address: newAddress
        }).then (() => {
            props.getMembers()
        })
    }

    return (
        <>
            <h2>Edit Member</h2>
            <form id = 'editMemberForm' onSubmit = {handleEdit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleNameUpdate} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' onChange={handleAgeUpdate} />
                <br/>
                <br/>
                <label htmlFor='familyMember'>Family Member:</label>
                <input type='text' name='familyMember' onChange={handleFamilyMemberUpdate} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' onChange={handleLanguageUpdate} />
                <br/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input type='text' name='address' onChange={handleAddressUpdate} />
                <br/>
                <br/>
            </form>
            <button type = 'submit' form = 'editMemberForm'>Update</button>
            <button onClick = {() => {props.handleDeleteMember(props.member)}}>Delete</button>
            <button onClick = {() => {props.toggleEdit()}}>Cancel</button>
        </>
    )
}

export default EditMember