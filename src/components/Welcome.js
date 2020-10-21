import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <h1>Welcome to the West Coast Customs </h1>
            <h5>Click and drag to navigate around the 3D navigation bar</h5>
            <Link to="/Home">
                <button>
                Enter
                </button>
            </Link>
        </div>
    )
}

export default Welcome