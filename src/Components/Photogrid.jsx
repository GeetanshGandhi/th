import React from 'react'
import './Photogrid.css'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Photogrid() {
    return (
        <div className='photo-main'>
            <p className="title">They describe our three years...</p>
            <div className="flex-container">
                <div className="flex-item">
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={200}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/por2.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={100}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/lan1.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                </div>
                <div className="flex-item">
                <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={100}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/lan2.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={100}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/lan3.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={100}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/lan4.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                </div>
                <div className="flex-item">
                <ScrollAnimation animateIn='bounceInLeft' duration={4} animateOut='flipOutX' offset={250}>
                    <div className="mainimg-wrapper">
                        <img className='main-img' src={require("../images/mainimg.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                </div>
                <div className="flex-item">
                <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={100}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/lan5.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={200}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/por1.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                </div>
                <div className="flex-item">
                <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={200}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/square1.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOut='flipOutY' offset={200}>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/square2.jpg")} alt="al" />
                    </div>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="private-container">
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv1.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv2.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv3.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv4.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv5.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                <div className="private-item">
                    <div className="card">
                        <div className="front">
                            <p className="priv-msg">Shhhh..<br/>It's Private.</p>
                        </div>
                        <div className="back">
                            <img className='privimg' src={require("../images/priv6.jpg")} alt = "alt"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className="adio">That is it for now. I will See you in next One. ILY 💌</p>
        </div>
    )
}
