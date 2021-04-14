import React, { Component } from 'react'
import './Navigation.css'
import './BreakPoints.css'
import Logo from './logo.svg'
export default class Navigation extends Component {
    render() {
        return (
            <div className="NavigationBody">
                <img src={Logo} />
                <div className="NavigationBtn">
                    <a href="#">Product</a>
                    <a href="#">Company</a>
                    <a href="#">Cpnnect</a>
                    <div className="SignBtn">
                    <a href="#">signin</a>
                    <a href="#">signup</a>
                    </div>
                </div>
                <img className="MenuIcon" src="https://img.icons8.com/android/24/ffffff/menu.png"/>
            </div>
        )
    }
}
