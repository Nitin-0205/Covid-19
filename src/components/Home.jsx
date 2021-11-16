import '../index.css';
import home_back from "../img/home_back.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldVirus} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section className="home">
            <div className="home_text">
                <h1 data-aos="flip-left" data-aos-duration = '900'>Corona <span>Virus Covid-19</span></h1>
                <p data-aos="zoom-in-right">The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020</p>
                <div>
                    <a href="#Prevention">How To Protect <span><FontAwesomeIcon icon={faShieldVirus}></FontAwesomeIcon></span></a>
                </div>
            </div>
            <div className="home_img_cont">
                <img src={home_back} className="home_img" alt="Covid-19 Image" data-aos="zoom-in"/>
            </div>
        </section>
    );
}

export default Home;