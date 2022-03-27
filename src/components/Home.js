import React from 'react'
import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <div className="card">
                    <NavLink to="/dashboard" className="btn btn-primary">Github</NavLink>
                    </div>
                    </div>
            </div>
            
        </>
    )
}

export default Home
