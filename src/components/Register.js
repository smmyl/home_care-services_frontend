import {useState} from 'react'
import AddMember from './members/Add'
import AddWorker from './workers/Add'

const Register = (props) => {
    const[target, setTarget] = useState(true)

    const showMember = () => {
        setTarget(true)
    }
    const showWorker = () => {
        setTarget(false)
    }

    return (
        <div class='page'>
            <div class='reg'>
                <div class='regtop'>
                    <div class='regtop-img'>
                        <img src='https://images.pexels.com/photos/2421934/pexels-photo-2421934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div class='regtop-info'>
                             <h4 className='bluetop'>Our goal at HomeCare Service is to make our sign up as user-friendly as possible. With just some quick inputs we can curate to your specific needs. Weather you are a new member or a new caretaker, we can ensure that our quality of service goes beyond expectation</h4>                   
                        <div class = 'reg-a'>
                            <a onClick={showMember}>Sign Up as a Member</a>
                            <a onClick={showWorker}>Sign Up as a Caretaker</a>
                        </div>
                    </div>
                </div>
                {target ?
                <div class='regbot-info'>
                    <div class = 'regbot-info2'>
                        <AddMember
                            getMembers = {props.getMembers}
                            setMembers = {props.setMembers}
                            showMembers = {props.showMembers}
                        />
                    </div>
                </div>
                :
                <div class='regbot-info'>
                    <div class = 'regbot-info2'>
                        <AddWorker
                            getWorkers = {props.getWorkers}
                            setWorkers = {props.setWorkers}
                            showWorkers = {props.showWorkers}
                        />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Register
