import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { Button } from 'bootstrap';
const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

function ContactForm() {
  return (
    <Row>
        <Row>
            <Col xs={2} md={2} >
                {'Image'}
            </Col>
            <Col xs={10} md={10} >
                Get in touch to discuss your project, request a quote or even just to pick our brains.
            </Col>
        </Row>
        <Form>
            <Form.Row>
                <b>1. Tell us about your company</b>
            </Form.Row>
            <Form.Row>
                {/* <Form.Label>Your Name</Form.Label> */}
                <Form.Control type="text" placeholder="Your Name" />
            </Form.Row>
            <Form.Row>
                <Row>
                    <Col>
                        <Form.Control type="email" placeholder="Your Email" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Your Phone Number" />
                    </Col>
                </Row>
            </Form.Row>
            <Form.Row>
                <Form.Control type="text" placeholder="Company Website" />
            </Form.Row>
            <Form.Row>
                <Form.Control type="text" placeholder="What’s your company’s biggest challenge today?" />
            </Form.Row>
            <Form.Row>
                <b>2. What are you looking to work on?</b>
            </Form.Row>
            <Form.Row>
                <Col xs={12} >
                    <Form.Control  placeholder="Describe your project briefly *" as="textarea" rows="3" />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} >
                    <Form.Group>
                    {' What’s your budget?'}
                        <Range min={5000} max={500000} step={500}  marks={{ 5000: "5000$", 500000: "500000$" }} pushable={true} tipProps={true} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Button>Submit</Button>
        </Form>
    </Row>
  );
}

export default ContactForm;
