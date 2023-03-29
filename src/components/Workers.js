import axios from 'axios'
import {useState, useEffect} from 'react'
import EditWorkers from './workers/Edit'
import AddWorkers from './workers/Add'

const[workers, setWorkers] = useState([])

const Workers = () => {
    //==Get Data
    const getWorkers = () => {
        axios.get('http://localhost:3000/workers').then((response) => {
            setWorkers(response.data)
        })
    }

    //==Delete Function for Data
    const handleDeleteWorkers = (data) => {
        axios.delete(`http://localhost:3000/workers/${data._id}`).then(() => {
        axios.get('http://localhost:3000/workers').then((response) => {
            setWorkers(response.data)
        })
        })
    }


  return (
    <>
        <h1>Workers</h1>
        <AddWorkers/>
        <EditWorkers/>
    </>
  )
}
export default Workers