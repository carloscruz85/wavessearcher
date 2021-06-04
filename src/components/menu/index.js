import React from 'react'
import basicButton from '../../logic/basic-button'
import './index.scss'
import Loader from '../loader'

function Menu() {
    return (
        <div className="menu">
            <Loader />
            {
                ['beach-shore-and-background.png',
                'kind-of-web-on-the-beach.png',
                'surf-level.png',
                'wave-direction.png',
                'wave-world-quality.png'
                ]
                .map( (img,iimg) => {
                    return basicButton(img,iimg)
                } )
            }

        </div>
    )
}

export default Menu
