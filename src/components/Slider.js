import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../images/logo.jpg';
import pic2 from '../images/team.jpg';
import pic3 from '../images/clinic.jpg';
export default class ImageSlider extends Component {

    render() {
        return (
            <>
                <div className='mb-3'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: 550 }}
                                src={pic1}
                                alt="doctors image"
                            />
                            <Carousel.Caption>
                                <h3>Helpful Doctors</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: 550 }}
                                src={pic2}
                                alt="logo"
                            />

                            <Carousel.Caption>
                                <h3>Your best Health Care Center Website</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: 550 }}
                                src={pic3}
                                alt="care"
                            />

                            <Carousel.Caption>
                                <h3>The best and Modern Clinics </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>


        );
    }
}