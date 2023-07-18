import React from 'react'
import { useOutletContext } from 'react-router-dom'
const VanHostDetailDetails = () => {
  const {currentVan}=useOutletContext()
  return (
    <>
    <section>
      <h2>Name: {currentVan[0].name}</h2><br />
      <h2>Category: {currentVan[0].type}</h2><br />
      <p>Descprition: {currentVan[0].description}</p>
      
    </section>
    </>
  )
}

export default VanHostDetailDetails