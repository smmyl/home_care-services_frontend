import {useState} from 'react'
import AddMember from './members/Add'
import AddWorker from './workers/Add'

const Login = (props) => {
    const[target, setTarget] = useState(true)

    const showMember = () => {
        setTarget(true)
    }
    const showWorker = () => {
        setTarget(false)
    }

    return (
        <div class='page'>
            <div class='login'>
                <div class='logintop'>
                    <div class='logintop-img'>
                        <img src='https://images.pexels.com/photos/2421934/pexels-photo-2421934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div class='logintop-info'>
                        <p>Qui autem provident aut dicta pariatur aut omnis laudantium et ipsa laborum aut inventore internos. Et numquam reiciendis aut blanditiis nesciunt ut suscipit incidunt in error accusamus ut dolores alias sed explicabo consequatur ut debitis totam. Ut enim reiciendis aut explicabo aliquid sed quaerat nihil et accusamus fuga est velit omnis. Cum dolores aspernatur qui architecto consequuntur 33 perferendis quia ut harum iusto est tempora rerum eum aperiam aliquid.</p>
                        <div class = 'login-a'>
                            <a onClick={showMember}>Sign Up as a Member</a>
                            <a onClick={showWorker}>Sign Up as a Caretaker</a>
                        </div>
                    </div>
                </div>
                {target ?
                <div class='loginbot-info'>
                    <div class = 'loginbot-info2'>
                        <AddMember
                            getMembers = {props.getMembers}
                        />
                    </div>
                </div>
                :
                <div class='loginbot-info'>
                    <div class = 'loginbot-info2'>
                        <AddWorker
                            getWorkers = {props.getWorkers}
                            setWorkers = {props.setWorkers}
                        />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Login
