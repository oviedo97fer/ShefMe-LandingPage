import React from 'react';

import './style.css'

import amigos from '../../assets/amigos.png'
import birth from '../../assets/birth.png'
import family from '../../assets/family.png'
import business from '../../assets/business.png'

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