import React from "react";
import Orlando from '../../img/Orlando McEwan.jpg';
import Chotan from '../../img/Chotan Sharma Photo.jpg';
import Zachary from '../../img/Zachary Levin Photo.jpg';
import Harry from '../../img/Harry Ogletree Photo.jpg';
import Saba from '../../img/Saba Mahd Photo.jpg';
import Josh from '../../img/Josh Biske Photo.jpg';

function About() {

    return (
        <div>
            <h1>About Professional-Readme</h1>
            <p>
                Professional-Readme allows you to fill out a form that generates a professional README file for your project!
                Login to access the README generator. If you do not have an account already, sign up by clicking the "Sign up" link at the top of the page.
            </p>

            
            
            
            <div>
                <h1>Meet The Developers</h1>
                
                <div className="aboutDevelopers">
                    <div>
                        <img src={Orlando} class="Orlando" alt="Orlando McEwan" />
                         <h3>Orlando McEwan</h3>
                         <p>Full-Stack Web Developer</p>
                    </div>
                    
                    <div>
                        <img src={Chotan} class="Chotan" alt="Chotan Sharma" />
                        <h3>Chotan Sharma</h3>
                        <p>Full-Stack Web Developer</p>
                    </div>

                    <div>
                        <img src={Zachary} class="Zachary" alt="Zachary Levin" />
                        <h3>Zachary Levin</h3>
                        <p>Full-Stack Web Developer</p>
                    </div>
                    
                    <div>
                        <img src={Harry} class="Harry" alt="Harry Ogletree" />
                        <h3>Harry Ogletree</h3>
                        <p>Full-Stack Web Developer</p>
                    </div>
                    
                    <div>
                        <img src={Saba} class="Saba" alt="Saba Mahd" />
                        <h3>Saba Mahd</h3>
                        <p>Full-Stack Web Developer</p>
                    </div>

                    <div>
                        <img src={Josh} class="Josh" alt="Josh Biske" />
                        <h3>Josh Biske</h3>
                        <p>Full-Stack Web Developer</p>
                    </div>

                </div>
            </div>
            

        </div>
    );
}

export default About;