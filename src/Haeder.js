import React from 'react'
import './Header.css'
import Navigation from './Navigation'
export default function Haeder() {
    return (
        <div className="HeaderBody">
            <Navigation />
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brande</p>
            <div className="SubscribeBtn">
                    <a href="#">Start for Free</a>
                    <a href="#">Learn More</a>
            </div>
        </div>
    )
}
