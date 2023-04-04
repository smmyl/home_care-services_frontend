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
              <h3>Caretakers</h3>
            <h4 className='bluetop'>At HomeCare Services we strive to give the best customer service possible by having a diverse group of caretakers. We want our customers to feel at home when they recieve our services so we send our caretaker that fits their description the closest.  Our multi-cultural team of caretakers is always ready to give a helping hand, here are a handful of our team members. </h4>
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