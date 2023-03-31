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
                <p>Non sint praesentium qui iusto rerum vel obcaecati ipsam sed inventore molestiae aut perspiciatis repellendus et dolorem nobis et voluptatem sunt. Ad voluptatibus ullam et asperiores repellat non debitis atque ea modi repudiandae in nostrum sequi eos quam velit.</p>
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