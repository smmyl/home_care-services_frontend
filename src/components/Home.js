import axios from 'axios'
import {useState, useEffect} from 'react'

const Home = () => {

    return (
        <div class='page'>
            <div class='home-top'>
                <div class='top-info'>
                    <p>Lorem ipsum dolor sit amet. Qui esse officiis ex earum iste sit aliquid expedita. Et eveniet deserunt non enim quaerat et adipisci sequi eos commodi magni aut voluptatem omnis vel error quos. Est aspernatur rerum eos libero error hic illum repudiandae est atque nisi ut vitae deleniti aut autem odio. Est quidem atque sed dolores esse in odio pariatur ex atque laudantium non quisquam error.</p>
                    <a href='#'>Sign Up</a>
                    <a href='#'>Login</a>
                    <a href='#'>Contact</a>
                    <p2> or call us at <span>888-888-888</span></p2>
                </div>
                <div class='top-img'>
                    <img src = 'https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </div>
            </div>
            <div class='home-mid'>
                <div class='mid-info1'>
                </div>
                <div class='mid-info2'>
                    <p>Lorem ipsum dolor sit amet. Qui esse officiis ex earum iste sit aliquid expedita. Et eveniet deserunt non enim quaerat et adipisci sequi eos commodi magni aut voluptatem omnis vel error quos. Est aspernatur rerum eos libero error hic illum repudiandae est atque nisi ut vitae deleniti aut autem odio. Est quidem atque sed dolores esse in odio pariatur ex atque laudantium non quisquam error.</p>
                </div>
            </div>
            <div class='home-bot'>
                <div class='bot-info1'>
                    <p>Lorem ipsum dolor sit amet. Qui esse officiis ex earum iste sit aliquid expedita. Et eveniet deserunt non enim quaerat et adipisci sequi eos commodi magni aut voluptatem omnis vel error quos. Est aspernatur rerum eos libero error hic illum repudiandae est atque nisi ut vitae deleniti aut autem odio. Est quidem atque sed dolores esse in odio pariatur ex atque laudantium non quisquam error.</p>
                </div>
                <div class='bot-info2'>
                </div>
            </div>
        </div>
    )
}

export default Home
