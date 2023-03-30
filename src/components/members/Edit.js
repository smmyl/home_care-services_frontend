import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const EditMember = (props) => {
    const [newName, setNewName] = useState(props.member.name)
    const [newAge, setNewAge] = useState(props.member.age)
    const [newLanguage, setNewLanguage] = useState(props.member.language)
    const [newFamilyMember, setNewFamilyMember] = useState(props.member.familyMember)
    const [newAddress, setNewAddress] = useState(props.member.address)
    const [newClean, setNewClean] = useState(props.member.clean)
    const [newFood, setNewFood] = useState(props.member.food)
    const [newWatch, setNewWatch] = useState(props.member.watch)

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
    const handleAddressUpdate = (event) => {
        setNewAddress(event.target.value)
    }
    const handleCleanUpdate = (event) => {
        setNewClean(!newClean)
    }
    const handleFoodUpdate = (event) => {
        setNewFood(!newFood)
    }
    const handleWatchUpdate = (event) => {
        setNewWatch(!newWatch)
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
            <h1>Edit Member</h1>
        </>
    )
}

export default EditMember