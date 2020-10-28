import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
const Home = (props) => {

    return ( 
        <div>
            
    {/* <InputGroup className="mb-3">
        <FormControl
      placeholder="Recipient's username"
    />
        <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
    </InputGroup> */}

<Form>
<input type="text" placeholder="Look up a movie"></input>
<input type="submit" value="Find"></input>
</Form>

<h3> Top Movie Reviews </h3>
<Container className="images-carousel" >
  <Row >
{/* <div > */}
    <Col xs={6} md={4}>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81lJ%2BkZrUqL.png" thumbnail />
    </Col>

    <Col xs={6} md={4}>
      <Image src="https://www.reviewsphere.org/wp-content/uploads/2020/02/The-Gentlemen-2019.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://nowplayingpodcast.com/images/posters/Godfather3.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg" thumbnail />
    </Col>
{/* </div> */}
  </Row>
</Container>

<br>
</br>


        </div>

    )
}

export default Home 