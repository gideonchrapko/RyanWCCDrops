import React from 'react'

import Cards from './Cards'
import MenuRight from './Menu'
import Cart from './Cart'

import Branding from '../images/wccMin.png';

const Gallery = () => {
    return (
        <div>
            <div>
                <img 
                    src={Branding} alt="logo" 
                    className="branding"
                    onClick={() => window.appHistory.push("/Home")}
                />
            </div>
            <div>
                <img 
                    src={'https://i.ibb.co/vZqYvsx/Shopgallery-Image-copy.png'} 
                    alt="gallery text" 
                    className="headerImage" 
                />
            </div>
            <MenuRight />
			<Cart />
            <Cards />
        </div>
    )
}

export default Gallery