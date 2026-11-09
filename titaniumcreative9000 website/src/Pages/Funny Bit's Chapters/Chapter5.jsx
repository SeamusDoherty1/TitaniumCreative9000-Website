import React from 'react'
const imageModules = import.meta.glob('../../assets/Funny Bits Chapters/Chapter 5/*.png',{ eager: true })
const images = Object.values(imageModules).map((mod) => mod.default);
export default function Chapter5(){
    return(
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Gallery item ${index}`} 
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
            ))}
        </div>
    )
}