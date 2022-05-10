import React from "react";
import {Carousel} from "react-bootstrap";
import Orlando from '../../img/Orlando McEwan.jpg';
import Chotan from '../../img/Chotan Sharma Photo.jpg';
import Zachary from '../../img/Zachary Levin Photo.jpg';
import Harry from '../../img/Harry Ogletree Photo.jpg';
import Saba from '../../img/Saba Mahd Photo.jpg';
import Josh from '../../img/Josh Biske Photo.jpg';
import './index.css'





function About() {

    return (
        <div>
            <h1 className="title">About Professional-Readme:</h1>
            <p className="intro">
                Professional-Readme allows you to fill out a form that generates a professional README file for your project!
                Login to access the README generator. If you do not have an account already, sign up by clicking the "Sign up" link at the top of the page.
            </p>

            <div>
            <h1>Meet The Developers:</h1>
                    <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Orlando}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>Orlando McEwan</h5>
                        <p>Full-Stack Web Developer.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Chotan}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Chotan Sharma</h5>
                        <p>Full-Stack Web Developer.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Zachary}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Zachary Levin</h5>
                        <p>Full-Stack Web Developer.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Harry}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Harry Ogletree</h5>
                        <p>Full-Stack Web Developer.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Saba}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Saba Mahd</h5>
                        <p>Full-Stack Web Developer.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80"
                        src={Josh}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Josh Biske</h5>
                        <p>Full-Stack Web Developer</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
            

        </div>
    );
}

export default About;