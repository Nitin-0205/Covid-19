import '../index.css';
import cold from "../img/cold.jpg";
import headach from "../img/headach.jpg";
import sick from "../img/sick.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Symptoms = () => {
    return (
        <section id="Symptoms" className="Sympt_section">
            <h1 className="Sympt_tit" data-aos="fade-down" >Covid-19 Symptoms</h1>
            <div className="Sympt_text">
                <p data-aos="fade-right">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization</p>
                <p data-aos="fade-left">The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
            </div>
            <div className="Sympt">
                <div>
                    <h1>Most common symptoms:</h1>
                    <ul>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  fever</li>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  cough</li>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  tiredness</li>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of taste or smell.</li>
                    </ul>
                </div>

                <div className="Sympt_img_cont" data-aos="flip-right">
                    <img src={cold} className="Sympt_img" alt="Cold" />
                </div>
            </div>

            <div className="Sympt">
                <div>
                    <h1>Less common symptoms:</h1>
                    <ul>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  aches and pains</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  sore throat</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  diarrhoea</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  conjunctivitis</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  headache</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of taste or smell</li>
                        <li data-aos="fade-left"><span><FontAwesomeIcon icon={faArrowRight} /></span>  a rash on skin, or discolouration of fingers or toes</li>

                    </ul>
                </div>
                <div className="Sympt_img_cont" data-aos="flip-right">
                    <img src={headach} className="Sympt_img" alt="Headach img" />
                </div>
            </div>

            <div className="Sympt">
                <div>
                    <h1>Serious symptoms:</h1>
                    <ul>
                        <li data-aos="fade-right" ><span><FontAwesomeIcon icon={faArrowRight} /></span>  difficulty breathing or shortness of breath</li>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  chest pain or pressure</li>
                        <li data-aos="fade-right"><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of speech or movement</li>

                    </ul>
                </div>
                <div className="Sympt_img_cont" data-aos="flip-right">
                    <img src={sick} className="Sympt_img" alt="Sick" />
                </div>
            </div>

        </section>

    );
}

export default Symptoms;

