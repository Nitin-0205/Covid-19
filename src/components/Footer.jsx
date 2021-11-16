import "../index.css"
import covid_tit from "../img/covid_logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";



const Footer = () =>{
    var copy_year = new Date().getFullYear();
    return (
        <div id="Footer">
            <div className="Foot_container">
                <div id="Foot_box1" className="Foot_boxs">
                    <div className="logo">
                        <h1 data-aos="zoom-in" data-aos-delay="200">C<img title="covid Logo" src={covid_tit} alt="Covid Logo" />VID-<span>19</span></h1>
                        <p data-aos="fade-right" data-aos-delay="300">This website is for health information and advice about coronavirus (COVID-19), how to prevent and protect yourself from disease.</p>
                        <p data-aos="fade-left" data-aos-delay="400">Learn about the government response to coronavirus on COWIN.com</p>
                    </div>
                </div>
                <div id="Foot_box2" className="Foot_boxs" data-aos="fade-up" data-aos-delay="200">
                    <h4 >QUICK LINK</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Prevention">Prevention</a></li>
                        <li><a href="#Symptoms">Symptoms</a></li>
                        <li><a href="#Vaccine">Vaccine</a></li>
                    </ul>
                </div>
                <div id="Foot_box3" className="Foot_boxs" data-aos="fade-up" data-aos-delay="300">
                    <h4>HELPFULL LINK</h4>
                    <ul>
                        <li><a href="#">Healthcare Professionals</a></li>
                        <li><a href="#">Healthcare Facilities</a></li>
                        <li><a href="#">Medical Conditions</a></li>
                        <li><a href="#">Repare your Family</a></li>
                    </ul>
                </div>
                <div id="Foot_box4" className="Foot_boxs" data-aos="fade-up" data-aos-delay="400">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100013975472406"><FontAwesomeIcon icon ={faFacebookF}></FontAwesomeIcon></a></li>
                        <li><a href="https://www.instagram.com/nitingupta1906/"><FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon></a></li>
                        <li><a href="https://www.linkedin.com/in/nitin-gupta-6732211b7/"><FontAwesomeIcon icon ={faLinkedinIn}></FontAwesomeIcon></a></li>
                        <li><a href="https://twitter.com/NitinGu24695830"><FontAwesomeIcon icon ={faTwitter}></FontAwesomeIcon></a></li>

                    </ul>
                </div>
            </div>
            <div className ="desc" data-aos="fade-up" data-aos-delay="500">
                <p><strong>Disclaimer:</strong> We hope you find the information presented on this website useful. This website is for general information and raise awareness of (2019-nCoV) only.
                    All the information based on WHO, NHS and CDC website. Information on our website is meant for awareness, if you have any doubt please verify from respective site.
                </p>
            </div>
            <div className = "copywrite">
                <p>Made With <span><FontAwesomeIcon icon= {faHandHoldingHeart}></FontAwesomeIcon></span> By <em><strong>Nitin Gupta</strong></em> copywrite &copy; {copy_year}</p>
            </div>
        </div>
    )

}

export default Footer;