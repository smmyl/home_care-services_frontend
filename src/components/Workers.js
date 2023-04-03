import axios from 'axios'
import {useState} from 'react'
import Worker from './Worker'

const Workers = (props) => {
    //==Delete Function for Data
    const handleDeleteWorker = (data) => {
        console.log(data._id)
        axios.delete(`http://localhost:3000/workers/${data._id}`).then(() => {
        axios.get('http://localhost:3000/workers').then((response) => {
            props.setWorkers(response.data)
        })
        })
    }

  return (
    <div class='page'>
        <div class='workers'>
            <div class='workerstop'>
            <h3 className='bluetop'>"Caring for seniors is a highly rewarding experience as it allows employees to build strong relationships with those they serve and make a positive impact on their lives."
                           <h4>- Kyle (former employee)</h4> 
                        </h3>
            </div>
            <div class='workersinfo'>
            {props.workers.map((worker) => {
                return(
                  <Worker
                    worker={worker}
                    getWorkers={props.getWorkers}
                    handleDeleteWorker={handleDeleteWorker}
                  />
                )
            })}
            </div>
        </div>
    </div>
    )
}
export default Workers