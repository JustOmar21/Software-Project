import React, { Component } from 'react';
import pic1 from '../images/Tooth_doctor.jpg'
import pic2 from '../images/eye.jpg'
import pic3 from '../images/ear.jpg'
import pic4 from '../images/child.jpg'
import pic5 from '../images/skin.jpg'
import pic6 from '../images/Psychiatry.jpg'
export default class Body extends Component {
    render() {
        return (
            <>
                <div className="container my-3">
                    <h3 className='text-center'>The Available Specialties</h3>

                    <div class="card-deck" >
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Tooth Specialist</h5>
                            </div>
                        </div>
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Eye Specialist </h5>
                            </div>
                        </div>
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Ear Specialist</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <div class="card-deck" >
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic4} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Pediatrics Specialist</h5>
                            </div>
                        </div>
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic5} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Dermatology Specialist </h5>
                            </div>
                        </div>
                        <div class="card" style={{ height: 350 }}>
                            <img class="card-img-top" src={pic6} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="text-center">Psychiatry Specialist</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}