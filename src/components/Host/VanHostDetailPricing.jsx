import React from 'react'
import { useOutletContext } from 'react-router-dom'
const VanHostDetailPricing = () => {
 const {currentVan}=useOutletContext()
  return (
    <>
    <h6 style={{fontWeight:'500', fontSize:'16px' }}><span style={{fontWeight:'bolder', fontSize:'24px'}} >${currentVan[0].price}</span>/day</h6> 
    </>
  )
}

export default VanHostDetailPricing