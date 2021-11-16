import '../index.css';
import about_img from "../img/about_img.jpg";

const About = () => {
    return (
        <section id= "about" className="about">
        <div className="about_text">
            <span className = "abt_dis" data-aos="fade-down" data-aos-duration = "900">ABOUT THE DISEASE</span>
            <h1 data-aos="fade-right" data-aos-duration = "900">CORONAVIRUS (COVID-19)</h1>
            <h2><strong>COVID-19 is a new illness that can affect your lungs and airways.</strong></h2>
            <p data-aos="zoom-in-right">caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.</p>
            <p data-aos="zoom-in-right">Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
            <p data-aos="zoom-in-right">Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
        </div>
        <div className="about_img_cont">
            <img data-aos="flip-right" src={about_img} className="about_img" alt="" />
        </div>
    </section>

        
    );
}

export default About;