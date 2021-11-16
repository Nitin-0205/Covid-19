import '../index.css';
import Vac1 from "../img/Covishield.jpg";
import Vac2 from "../img/Covaxin.jpg";
import Vac3 from "../img/suptnik.jpg";

const Vaccine = () => {
    return (
        <section id="Vaccine" className="Vac_sec">
        <div className="Vac_text">
            <h1 className="Vac_tit" data-aos="fade-down">Vaccine Available In India</h1>
            <p data-aos="fade-right"><em>India is using three vaccines</em> - the Oxford-AstraZeneca jab, <br />known locally as <span>Covishield</span>;<br />  <span>Covaxin</span> by Indian firm Bharat Biotech;<br /> and Russian-made <span>Sputnik V</span>.</p>
        </div>
        <div className="Vacines_Main_container" data-aos="flip-left" data-aos-duration="500">
            <div className="vac_slid" >
                <div className="Vacines_container">
                    <div className="Vac_img_contain">
                        <img src={Vac1} className="Vac_img" alt="Covisheld" />
                    </div>
                    <div className="Vac_decpt">
                        <h1>Covisheld</h1>
                        <p>COVISHIELD™ vaccination course consists of two separate doses of 0.5 ml each. The second dose should be administered
                            between 4 to 6 weeks after the first dose. However, there is data available for administration of the second dose up to 12
                            weeks after the first dose from the overseas studies (see section 5.1). </p>
                    </div>
                </div>
            </div>

            <div className="vac_slid" data-aos="flip-left" data-aos-duration="500" data-aos-delay="400">
                <div className="Vacines_container">
                    <div className="Vac_img_contain">
                        <img src={Vac2} className="Vac_img" alt="Covisheld" />
                    </div>
                    <div className="Vac_decpt">
                        <h1>Covaxin</h1>
                        <p>
                            The vaccine is developed using Whole-Virion Inactivated Vero Cell derived platform technology. Inactivated vaccines do not replicate and are unlikely pathological effects. They contain dead virus, incapable of infecting people still able to instruct the immune system a defensive reaction on infection.
                        </p>
                    </div>
                </div>
            </div>

            <div className="vac_slid" data-aos="flip-left" data-aos-duration="500" data-aos-delay="800">
                <div className="Vacines_container">
                    <div className="Vac_img_contain">
                        <img src={Vac3} className="Vac_img" alt="Covisheld" />
                    </div>
                    <div className="Vac_decpt">
                        <h1>Sputnik-V</h1>
                        <p> This Sputnik Vaccine Efficacy Percentage is seen around 91% in India. Which can help us fight covid 19 and SARS-CoV-2 infection. This medicine is designed to be used in the age group of 18 years. It is expected that soon its dosage will start importing into India. The drug is yet to be administered by the Indian drug regulator.</p>
                    </div>
                </div>
            </div>

        </div>

    </section>

        
    );
}

export default Vaccine;