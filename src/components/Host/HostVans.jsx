import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
const HostVans = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])



    return (
        <>
    <br />
        <section className='w-5 h-5' style={{height:'125vh'}}>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            
                        {
    vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper wrapper"
            style={{color:'#000', textDecoration:'none'}}>
           
            <div className="d-flex justify-content-start px-2 py-2 hostvanscontainer">
            <img src={van.imageUrl} alt={van.imageUrl} className='w-1' style={{borderRadius:'5px', width:'20vw', height:'30vh'}} />
            <div className='px-3'>
                <h2>{van.name}</h2>
                <p>${van.price}/day</p>
            </div>
            </div>
            
        </Link>
    ))
    }
                        </section>

) : (
    <h2>Loading...</h2>
    )
}
            </div>
        </section>
</>
    )
}

export default HostVans