import React from 'react'
import { useOutletContext } from 'react-router-dom'
const VanHostDeailPhotos = () => {
  const {currentVan}=useOutletContext()
  return (
   <>
   <img src={currentVan[0].imageUrl} alt={currentVan[0].type} className='img-fluid rounded d-block' style={{width:'100px'}} />
   </>
  )
}

export default VanHostDeailPhotos