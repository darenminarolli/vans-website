import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../../server';
import '../../App.css'


const Vans=(() => {

  const [vans, setVans] = useState([]);
 

//   useEffect(() => {

 useEffect(()=>{
  fetch("/api/vans")
       .then(res=>res.json())
       .then(data=> setVans(data.vans))
},[])


const [filter, setFilter] = useState(null);

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredVans = filter ? vans.filter((van) => van.type === filter) : vans;

const [color,setColor]=useState(null)

const colorChanger=()=>{
if(vans.type=='luxury'){
  setColor('#161616')
}else if(vans.type=='simple'){
  setColor('#E17654')
}else{
  setColor('#115E59')
}
}


  return(
    <>
    <div className="my-5">
      <Container>
        <h1 className="mb-4">Explore our van options</h1>
        <Row className="mb-4">
          <Col>
            
              <Button  onClick={() => handleFilter("simple")}  variant="outline-primary" className="me-3 Typebuttons">Simple</Button>
            
            
              <Button  onClick={() => handleFilter("luxury")}variant="outline-primary" className="me-3 Typebuttons">Luxury</Button>
         
         
              <Button  onClick={() => handleFilter("rugged")} variant="outline-primary" className="me-3 Typebuttons">Rugged</Button>
           
            
              <Button id='clearBtn' onClick={() => handleFilter(null)} variant="outline-secondary"> <u>clear filters</u></Button>
           
          </Col>
        </Row>
        <Row className='' xs={1} sm={2} md={3} lg={4}>
        {filteredVans.map((van) => (
            <Col className='py-2' key={van.id}>
                  <Link to={`/vans/${van.id}`} style={{textDecoration:'none', color : ' rgb(21, 21, 21)'}}>
              <Card className="mb-4 h-100 ">
                <Card.Img variant="top" src={van.imageUrl} />
                <Card.Body>
                  <Card.Title>{van.name}</Card.Title>
                  
                  <Card.Text>${van.price}/day</Card.Text>
                    <Button id={van.type==='luxury'? 'luxury':van.type==='simple'?'simple':'rugged'} >{van.type}</Button>
                </Card.Body>
              </Card>
                  </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </>
  )
})

  export default Vans

