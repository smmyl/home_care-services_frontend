import axios from 'axios'
import {useState, useEffect} from 'react'
import EditWorker from './workers/Edit'

const Workers = (props) => {
    const[edit, setEdit] = useState(false)
    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newLanguage, setNewLanguage] = useState('')
    const [newImage, setNewImage] = useState('')

    const toggleEdit = () => {
        setEdit(!edit)
    }

    //==Delete Function for Data
    const handleDeleteWorker = (data) => {
        console.log(data._id)
        axios.delete(`http://localhost:3000/workers/${data._id}`).then(() => {
        axios.get('http://localhost:3000/workers').then((response) => {
            props.setWorkers(response.data)
        })
        })
    }
    const handleEdit = (event, worker) => {
        event.preventDefault()
        console.log(worker._id)
        axios.put(`http://localhost:3000/workers/${worker._id}`, {
            name: newName,
            age: newAge,
            language: newLanguage,
            image: newImage
        }).then ((response) => {
            console.log(response.data)
            props.getWorkers(response.data)
        })
    }



  return (
    <div class='page'>
        <div class='workers'>
            <div class='workerstop'>
                <p>Non sint praesentium qui iusto rerum vel obcaecati ipsam sed inventore molestiae aut perspiciatis repellendus et dolorem nobis et voluptatem sunt. Ad voluptatibus ullam et asperiores repellat non debitis atque ea modi repudiandae in nostrum sequi eos quam velit.</p>
            </div>
            <div class='workersinfo'>
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
                            setNewName = {setNewName}
                            setNewAge = {setNewAge}
                            setNewLanguage = {setNewLanguage}
                            setNewImage = {setNewImage}
                            handleEdit = {handleEdit}
                        /> 
                        </>
                        :
                        <div class='workerinfo'>
                            <div class='workerinfoimage'>
                                <img src={worker.image}></img>
                            </div>
                            <div class='w'></div>
                            <h4>{worker.name}</h4>
                            <p>Age: {worker.age}</p>
                            <p>Language: {worker.language}</p>
                            <button onClick = {() => {toggleEdit()}}>Edit</button>
                        </div>
                    }
                    </>
                )
            })}
            </div>
        </div>
    </div>
    )
}
export default Workers