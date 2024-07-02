import React from 'react'
import './Photogrid.css'
export default function Photogrid() {
    return (
        <div className='photo-main'>
            <p className="title">They describe our three years...</p>
            <div className="flex-container">
                <div className="flex-item">
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/por2.jpg")} alt="al" />
                    </div>
                    <div className="img-wrapper">
                        <img src={require("../images/lan1.jpg")} alt="" className="img-img" />
                    </div>
                </div>
                <div className="flex-item">
                    <div className="img-wrapper">
                        <img src={require("../images/lan2.jpg")} alt="alt" className="img-img" />
                    </div>
                    <div className="img-wrapper">
                        <img src={require("../images/lan3.jpg")} alt="alt" className="img-img" />
                    </div>
                    <div className="img-wrapper">
                        <img src={require("../images/lan4.jpg")} alt="alt" className="img-img" />                        
                    </div>
                </div>
                <div className="flex-item">
                    <div className="mainimg-wrapper">
                        <img src={require("../images/mainimg.jpg")} alt="" className="main-img" />
                    </div>
                </div>
                <div className="flex-item">
                    <div className="img-wrapper">
                        <img src={require("../images/lan5.jpg")} alt="alt" className="img-img" /> 
                    </div>
                    <div className="img-wrapper">
                        <img className='img-img' src={require("../images/por1.jpg")} alt="al" />
                    </div>
                </div>
                <div className="flex-item">
                    <div className="img-wrapper">
                        <img src={require("../images/square1.jpg")} alt="alt" className="img-img" />
                    </div>
                    <div className="img-wrapper">
                        <img src={require("../images/square2.jpg")} alt="alt" className="img-img" />
                    </div>
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
        </div>
    )
}
