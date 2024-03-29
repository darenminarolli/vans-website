import React from 'react'
import { useParams,Link, Outlet, useLoaderData,  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './VanHostDetail.css'
import { getHostVans } from '../../api'

export function loader({params}){
  return getHostVans(params.id)
  
}
const VanHostDetail = () => {
  const { id } = useParams()
  // const [currentVan, setCurrentVan] = React.useState(null)
  // React.useEffect(() => {
  //     fetch(`/api/host/vans/${id}`)
  //         .then(res => res.json())
  //         .then(data => setCurrentVan(data.vans))
  // }, [])
const currentVan=useLoaderData()
 console.log(currentVan)
  return (
    <>
    <section>
     <Link to='/host/vans' relative='path' className='nav-link'><h5><AiOutlineArrowLeft/> Back to all vans</h5></Link> 
    </section>
        <>
          <section>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan[0].imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type btn-primary btn ${currentVan[0].type}`}>
                            {currentVan[0].type}
                        </i>
                        <h3>{currentVan[0].name}</h3>
                        <h4>${currentVan[0].price}/day</h4>
                    </div>
                </div><br />
                <nav>
                <ul className='nav'>
                  <li className='nav-item'>
                      <Link className='nav-link links' to='.' >Details</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='nav-link links' to='pricing'>Pricing</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='photos' className='nav-link links'>Photos </Link>
                  </li>
                </ul>
                </nav>
                <Outlet context={{currentVan}}/><br /><br /><br />
            </div>
        </section>
        </>
    </>

  )
}



export default VanHostDetail