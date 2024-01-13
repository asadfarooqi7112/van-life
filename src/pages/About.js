import aboutPagePhoto from "../images/aboutpage.png"
import {Link} from "react-router-dom"

export default function About(){
    return(
        <div className="about-container">
            <img src ={aboutPagePhoto} alt="About Page Hero" className="about-page-photo"/>
            <h1 className="about-page-title">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="about-page-text">Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br/>
                <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="about-page-explore-container">
                <h3 className="about-page-explore-container-title">Your destination is waiting.<br/> Your van is ready.</h3>
                <Link to="/vans" className="about-page--explore-our-van-button">Explore our vans</Link>
            </div>
        </div>
    )
}