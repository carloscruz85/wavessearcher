import React from 'react'
import './index.scss'
import Logo from '../../assets/images/surf-city-circle.png'

function Loader() {
    return (
        <div className="loader-container">
            <div className="aro">
               
            </div>
            <img src={Logo} alt="loader"/>
        </div>
    )
}

export default Loader
