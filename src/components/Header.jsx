import '../index.css';
import covid_tit from "../img/covid_logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"


const Header = ()=> {
    const [dropstate,setdropstate] = useState("false")

    const Dropdown = () =>{
        let drop = document.getElementById("Dropdown_menu");
        if(dropstate === "false"){
            drop.style.left = "0";
            setdropstate("true");
        }else{
            drop.style.left = "-120%";
            setdropstate("false");
        }
    }
    useEffect(() => {
        AOS.init({
            duration:400
        });
      }, []);

    return(
        <div className = "Head">
            <div className = "logo" data-aos="zoom-in">
                <h1>C<img title ="covid Logo" src = {covid_tit} alt = "Covid Logo"/>VID-<span>19</span></h1>
            </div>
            <div>
                <button onClick = {Dropdown} className = "dropDown"><FontAwesomeIcon icon = {faBars} /></button>
            </div>
            <ul id = "Dropdown_menu">
                <li data-aos="fade-left"><a href = "#about">About</a></li>
                <li data-aos="fade-left" data-aos-delay = "150"><a href ="#Prevention">Prevention</a></li>
                <li data-aos="fade-left" data-aos-delay = "300"><a href ="#Symptoms">Symptoms</a></li>
                <li data-aos="fade-left" data-aos-delay = "450"><a href ="#Vaccine">Vaccine</a></li>
                <li data-aos="fade-left" data-aos-delay = "600"><a href ="#Contact">Contact us</a></li>
            </ul>
        </div>
        
    );
}

export default Header;