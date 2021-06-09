import React, {useContext, useEffect, useState} from 'react'
import basicButton from '../../logic/basic-button'
import './index.scss'
import { DataContext } from '../../context/context'
import {Link} from 'react-router-dom'
import House from '../../assets/images/house.png'

function Menu() {
    const { globalData, dispatch, filtered } = useContext(DataContext)
    const [globalTerms, setGlobalTerms] = useState( [] )
    const {lang} = globalData
    // console.log(globalData);
    const dataLocal = JSON.parse(window.localStorage.getItem('ws-data'))
    // const terms = Object.entries(dataLocal.terms)

    useEffect(() => {
        if(globalData.data === null){
            dispatch({ type: 'ADD_DATA', data: dataLocal })
            // console.log(dataLocal);
        }

        
    if( globalData.terms )
        setGlobalTerms(Object.entries(globalData.terms))
    }, [ globalData, dispatch, filtered])

    // console.log(globalData);

    return (
        <div className="menu">
            <Link to={'/'} className="basic-button" >
                <img src={House} alt="home"/>
            </Link>
            <div onClick={ () => { dispatch({ type:'CHANGE_LANG' }) } } className=" text" >
                { lang === 'es' ? 'EN' : 'ES' }
            </div>
             {
            globalTerms.lenght !== 0 ?
            globalTerms
                .map( (term,iimg) => {
                    // console.log(term);
                    return basicButton(term,iimg)
                } )
                : null
            } 

        </div>
    )
}

export default Menu
