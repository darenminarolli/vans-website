import React from 'react'
import { useParams,Link,useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';
import '../../App.css'
const VanDetail = () => {
    const params = useParams()
    const location=useLocation()
    console.log(location)
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
  
   
  //  console.log(van)
const search=location.state?.search || ''; //optional chaining
// nese location.state eshte dicka atehere kerko per search nese jo thjesht '', ne menyren e vjeter:
// location.state && location.state.search pra nuk mund te ezikstoj location.state.search nese location.state=false
const type=location.state?.type || 'all';
console.log( typeof type);  
return (
    <>   
       { van ? ( 

      <div className="container py-5">
        <div className='row'>
          <Link to={`/vans${search}`} relative='path' className='nav-link links'>
          <u><strong>Back to {type} vans</strong></u>
          </Link>
        </div>
          <div className="row">
            <div className="col-md-6">
              <img src={van.imageUrl} className="img-fluid rounded" alt="About Us" />
            </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
         
         <div className='row  py-2  '>
          <h1 style={{fontWeight:'bolder'}} className='col-6 gap-1 '>{van.name}</h1>
          <button type='button' id={(van.type==='luxury'? 'luxury':van.type==='simple'?'simple':'rugged')} className='btn btn-secondary   col-5'>{van.type}</button>
         </div>
         
         
         <p><strong> ${van.price}/day</strong> </p>
          <p className='text-break'>{van.description}</p>
          <h2 className="mt-4 mb-3">Your Destination is Waiting. Your Van is Ready.</h2>
          <form>
            
           <Link to='/vans' className='btn btn-primary '>Explore vans</Link>
          </form>
        </div>
      </div>
    </div>
            
                ): <h1>Loading...</h1>
          }
    
    </>
  )
}

export default VanDetail;


// import React from "react"
// import { useParams } from "react-router-dom"

// export default function VanDetail() {
//     const params = useParams()
//     const [van, setVan] = React.useState(null)

//     React.useEffect(() => {
//         fetch(`/api/vans/${params.id}`)
//             .then(res => res.json())
//             .then(data => setVan(data.vans))
//     }, [params.id])

//     return (
//         <div className="van-detail-container">
//             {van ? (
//                 <div className="van-detail">
//                     <img src={van.imageUrl} />
//                     <i className={`van-type ${van.type} selected`}>{van.type}</i>
//                     <h2>{van.name}</h2>
//                     <p className="van-price"><span>${van.price}</span>/day</p>
//                     <p>{van.description}</p>
//                     <button className="link-button">Rent this van</button>
//                 </div>
//             ) : <h2>Loading...</h2>}
//         </div>
//     )
// }


//  <Container className='container py-5'>
            //     <Row>
            //         <Col className='col-md-6'>
                    
            //             <CardImg src={van.imageUrl} className='img-fluid rounded' alt='van'></CardImg>
            //         </Col>
             
              
            //     <Col className='col-md-6 d-flex flex-column justify-content-center align-text-top'>
            //     <h1>{van.name}</h1> <Button className={    (van.type==='luxury'? 'luxury':van.type==='simple'?'simple':'rugged')}  >{van.type}</Button>
                
            //     <p>${van.price}/day</p>
            //     <p className='text-break'>{van.description}</p>
                
            //     <Button style={{backgroundColor:'#FF8C38'}}><Link style={{color:'white', textDecoration:'none'}}>Rent this van</Link></Button>
            //     </Col> 

       
            //     </Row>
            
            // </Container>