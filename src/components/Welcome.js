import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../images/BackgroundWelcome.png'

const Welcome = () => {
    return (
        <div>
            <div style={{ position: "fixed", zIndex: "9", Top: "100px" }}>
                <h1>Welcome to the West Coast Customs </h1>
                <h5>Click and drag to navigate around the 3D navigation bar</h5>
                <Link to="/Home">
                <button>
                    Enter
                </button>
                </Link>
            </div>
            <img src={Background} className="background" />
        </div>
    )
}

export default Welcome