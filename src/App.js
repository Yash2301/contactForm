import React from 'react';
import './App.css';
import NavbarCustom from './components/Navbar';
import ContactForm from './components/ContactForm';
import { Container,Row,Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <NavbarCustom />
        <Row className="show-grid">
          <Col xs={12} md={3}>
          </Col>
          <Col xs={12} md={9}>
            <div className={'contact-form'} >
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
