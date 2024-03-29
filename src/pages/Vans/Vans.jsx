import { Link, useSearchParams, useLoaderData} from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../../server';
import '../../App.css'
import { getVans } from '../../api';

export async function loader(){
  return  await  getVans()
}
export default function  Vans(){
const[searchParams,setSearchParams]=useSearchParams();
const  typeFilter=searchParams.get('type')
const vans=useLoaderData()
console.log(vans);


const displayFilteredVans= typeFilter? vans.filter((van)=>van.type==typeFilter): vans;


function handleFilterChange(key, value) {
  setSearchParams(prevParams => {
      if (value === null) {
          prevParams.delete(key)
      } else {
          prevParams.set(key, value)
      }
      return prevParams
  })
}

  return(
    <>
    <div className="my-5">
      <Container>
        <h1 className="mb-4">Explore our van options</h1>
        <Row className="mb-4">
          <Col>
              <Button onClick={() => handleFilterChange("type", "simple")} variant="outline-primary" className="me-3 Typebuttons">Simple</Button>
              <Button onClick={() => handleFilterChange("type", "rugged")} variant="outline-primary" className="me-3 Typebuttons">Rugged</Button>
              <Button onClick={() => handleFilterChange("type", "luxury")} variant="outline-primary" className="me-3 Typebuttons">Luxury</Button>
              <Button onClick={() => handleFilterChange("type",null)} id='clearBtn'  variant="outline-secondary"> <u>Clear filters</u></Button>
          </Col>
        </Row>
        <Row className='' xs={1} sm={2} md={3} lg={4} >
        {displayFilteredVans.map((van) => (
            <Col className='py-2' key={van.id} >
                  <Link to={van.id} state={{search:`?${searchParams.toString()}`, type: typeFilter}} style={{textDecoration:'none', color : ' rgb(21, 21, 21)'}}>
              <Card className="mb-4 h-100">
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
}

 
