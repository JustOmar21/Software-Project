import React, { Component } from 'react';
import logo from '../images/logocarecenter.jpg'
export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-primary mt-5 p-3" >
                    <footer className="text-center text-white">
                        <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-4">
                                    <img className='w-50' src={logo} alt="logo" />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>
                                            we are specialized in premiere medical services in all over Egypt.
                                            The specificalities we offer and licensed extends to Pediatric, Dentistry, Ear, nose and throat (ENT), Dermatology , Psychiatry
                                            Our A listed doctors are graduated from Ain shams and Qisr Eliny Universities ( A Top listed universities in Middle East), with their Master degrees and license achieved.
                                            We have an excellent partnership with A listed Clinics for outpatients surgeries and inpatients admissions when needed.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}