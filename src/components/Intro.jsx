import '../index.css';
import doctor_gif from "../img/doctor.gif";

const Intro = () => {
    return (
        <section className="Intro">
                <div className="Int_text">
                    <h1 data-aos="fade-left">Doctor Say's</h1>
                    <p data-aos="zoom-in-right">Due to the coronavirus (COVID-19) outbreak, there are different options for accessing health services. This includes telehealth, to help protect patients and health workers and stop the spread of the virus. Some elective surgeries are also available. Find out how to get the health care you need.</p>
                </div>
                <div className="Doct_img_cont">
                    <img data-aos="flip-left" src={doctor_gif} className="Doct_img" alt="Doctor" />
                </div>
            </section>
    );
}

export default Intro;