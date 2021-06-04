import React from 'react'
import basicButton from '../../logic/basic-button'
import './index.scss'

function Menu() {
    return (
        <div className="menu">
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
