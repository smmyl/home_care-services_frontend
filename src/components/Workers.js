import axios from 'axios'
import {useState, useEffect} from 'react'
import EditWorker from './workers/Edit'

const Workers = () => {
    const[workers, setWorkers] = useState([])
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
        <EditWorker/>
    </>
  )
}
export default Workers