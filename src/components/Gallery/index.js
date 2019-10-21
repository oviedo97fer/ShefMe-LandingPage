import React from 'react';

import './style.css'

import amigos from '../../assets/amigos.webp'
import birth from '../../assets/birth.webp'
import family from '../../assets/family.webp'
import business from '../../assets/business.webp'

const Gallery = () =>{
    return(
        <div className='GalleryComp'>
            <div className='row'>
                <img className='amigos' src={amigos}/>
                <img className='business' src={business}/>
            </div>
            <div className='row'>
                <img className='birth' src={birth}/>
                <img className='family' src={family}/>
            </div>
        </div>
    )
}

export default Gallery