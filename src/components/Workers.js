import axios from 'axios'
import {useState, useEffect} from 'react'
import EditWorker from './workers/Edit'

const Workers = (props) => {
    const[edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    //==Delete Function for Data
    const handleDeleteWorker = (data) => {
        axios.delete(`http://localhost:3000/workers/${data._id}`).then(() => {
        axios.get('http://localhost:3000/workers').then((response) => {
            props.setWorkers(response.data)
        })
        })
    }


  return (
    <>
        <h1>Workers</h1>
        {props.workers.map((worker) => {
            return(
                <>
                {edit ?
                    <>
                    <h2>Edit</h2>
                    <EditWorker
                        handleDeleteWorker = {handleDeleteWorker}
                        getWorkers = {props.getWorkers}
                        worker = {worker}
                        toggleEdit = {toggleEdit}
                        setEdit = {setEdit}
                    /> 
                    </>
                    :
                    <>
                        <p>Name:{worker.name}</p>
                        <button onClick = {() => {toggleEdit()}}>Edit</button>
                    </>
                }
                </>)
        })}
    </>
    )
}
export default Workers