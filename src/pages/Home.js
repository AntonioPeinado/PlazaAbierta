import React from 'react';
import Footer from '../components/Footer';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import code from '../img/code.jpg';

const Home = () =>{
  return (
    <>
      <div className="home">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={code}
            style={{ width: "17rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title>Tiendas Ropa</Card.Title>
            <Card.Text>
             Desde aquí puede pasear por todas las tiendas de ropa de Pinto,
             y decidir cual quiere ver 
            </Card.Text>
            <Button variant="primary">Ir a Ropa</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={code}
            style={{ width: "17rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={code}
            style={{ width: "17rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={code}
            style={{ width: "17rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={code}
            style={{ width: "17rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
