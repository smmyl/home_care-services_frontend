import axios from 'axios'
import {useState, useEffect} from 'react'

const Contact = (props) => {

    return (
        <div class='page'>
        <div class='home-top'>
            <div class='hometop-info'>
                <p>HomeCare Services is a personal home response company that aids the elderly through personal care. The company's service solves an elderly home security issue by giving elderly a hand to avoid unforseen circumstances. Weather it be help with cleaning, food delivery or monitoring, HomeCare Services does it all. </p>
                <p2> Email us at<span>HomeCareServices@gmail.com</span></p2>
                <p2> or call us at <span>888-888-888</span></p2>
                <ul className='links'>
                    <li><a href='https://www.facebook.com/'><img  src="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png" /></a></li>
                    <li><a href='https://www.twitter.com/'><img src="https://sguru.org/wp-content/uploads/2018/02/5a2fe479cc45e43754640849.png" /></a></li>
                    <li><a href='https://www.linkedin.com/'><img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" /></a></li>
                    <li><a href='https://www.github.com/'><img src="https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png" /></a></li>
                </ul>
            </div>
            <div class='hometop-img'>
                <img src='https://images.pexels.com/photos/5585242/pexels-photo-5585242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
            </div>
            
        </div>
        <div class='home-bot'>
            <div class='homebot-info1'>
                <p>Lorem ipsum dolor sit amet. Qui esse officiis ex earum iste sit aliquid expedita. Et eveniet deserunt non enim quaerat et adipisci sequi eos commodi magni aut voluptatem omnis vel error quos. Est aspernatur rerum eos libero error hic illum repudiandae est atque nisi ut vitae deleniti aut autem odio. Est quidem atque sed dolores esse in odio pariatur ex atque laudantium non quisquam error.</p>
            </div>
            <div class='homebot-info2'>
            </div>
        </div>
    </div>
    )
}

export default Contact