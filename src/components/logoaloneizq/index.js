import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-6thman.png'
import LogoMin from '../../assets/images/logo-6thman-min.png'
import './index.scss'

const LogoAloneIzq = (props) => {
  return (
    <div className={`logo-alone-izq-container ${props.auxclass}`}>
      <Link to="/">
        <img className="logo-izq-full" alt="logo" src={Logo} />
        <img className="logo-izq-min" alt="logo" src={LogoMin} />
      </Link>
    </div>
  )
}

export default LogoAloneIzq
