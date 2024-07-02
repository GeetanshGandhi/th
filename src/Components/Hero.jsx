import React, { useEffect, useState } from 'react'
import './Hero.css'
import ReactConfetti from 'react-confetti'
export default function Hero() {
    const [dimension, setdimension] = useState({
        width: window.innerWidth, height: window.innerHeight+100
    })
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setdimension({width: window.innerWidth, height: window.innerHeight+100});
        })
    })
  return (
    <div className='heromain'>
        <h1>Happy Three Years<br/>My Love 💖</h1>
        <ReactConfetti width={dimension.width} height={dimension.height}
            gravity={0.09} numberOfPieces={300}
            colors={["red","blue","rgb(0,255,0)","rgb(206, 0, 113)","rgb(20, 220, 255)"]}/>
    </div>
  )
}
