import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const EditMember = (props) => {
    const [newName, setNewName] = useState(props.member.name)
    const [newAge, setNewAge] = useState(props.member.age)
    const [newLanguage, setNewLanguage] = useState(props.member.language)
    const [newFamilyMember, setNewFamilyMember] = useState(props.member.familyMember)
    const [newClean, setNewClean] = useState(props.member.clean)
    const [newFood, setNewFood] = useState(props.member.food)
    const [newWatch, setNewWatch] = useState(props.member.watch)
    const [newAddress, setNewAddress] = useState(props.member.address)

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

    //==Delete Function for Data
    const handleDeleteMember = (data) => {
        axios.delete(`http://localhost:3000/members/${data._id}`).then(() => {
        axios.get('http://localhost:3000/members').then((response) => {
            props.setMembers(response.data)
            })
        })
    }
    //==Edit Function
    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/members/${props.member._id}`, {
            name: newName,
            age: newAge,
            language: newLanguage,
            familyMember: newFamilyMember,
            clean: newClean,
            food: newFood,
            watch: newWatch,
            address: newAddress
        }).then (() => {
            props.getMembers()
            props.setEdit(false)
        })
    }

    return (
        <>
            <form id = 'editMemberForm' onSubmit = {handleEdit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' placeholder = {props.member.name} onChange={handleNameUpdate} />
                <br/>
                <br/>
                <label htmlFor='age'>Age:</label>
                <input type='number' name='age' placeholder = {props.member.age} onChange={handleAgeUpdate} />
                <br/>
                <br/>
                <label htmlFor='familyMember'>Family Member:</label>
                <input type='text' name='familyMember' placeholder = {props.member.familyMember} onChange={handleFamilyMemberUpdate} />
                <br/>
                <br/>
                <label htmlFor='language'>Language:</label>
                <input type='text' name='language' placeholder = {props.member.language} onChange={handleLanguageUpdate} />
                <br/>
                <br/>
                <label htmlFor='address'>Address:</label>
                <input type='text' name='address' placeholder = {props.member.address} onChange={handleAddressUpdate} />
                <br/>
                <br/>
            </form>
            <button type = 'submit' form = 'editMemberForm'>Update</button>
            <button onClick = {() => {handleDeleteMember(props.member)}}>Delete</button>
            <button onClick = {() => {props.toggleEdit()}}>Cancel</button>
        </>
    )
}

export default EditMember