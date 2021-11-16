import '../index.css';
import home_back from "../img/home_back.png";
import about_img from "../img/about_img.jpg";
import doctor_gif from "../img/doctor.gif";
import card_gif1 from "../img/wash_hand.gif";
import card_gif2 from "../img/social-distancing.gif";
import card_gif3 from "../img/were_mask.gif";
import card_gif4 from "../img/stay-safe.gif";
import card_gif5 from "../img/sick.gif";
import card_gif6 from "../img/work_home.gif";
import cold from "../img/cold.jpg";
import headach from "../img/headach.jpg";
import sick from "../img/sick.png";
import Vac1 from "../img/Covishield.jpg";
import Vac2 from "../img/Covaxin.jpg";
import Vac3 from "../img/suptnik.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRocket, faShieldVirus, } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';


const Main = () => {

    return (
        
        <div id="main_id" className="main">
            {/* Home */}
            <section className="home">
                <div className="home_text">
                    <h1>Corona <span>Virus Covid-19</span></h1>
                    <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020</p>
                    <div>
                        <a  href = "#Prevention">How To Protect <span><FontAwesomeIcon icon={faShieldVirus}></FontAwesomeIcon></span></a>
                    </div>
                </div>
                <div className="home_img_cont">
                    <img src={home_back} className="home_img" alt="Covid-19 Image" />
                </div>
            </section>
              
              {/* About */}

            <section id= "about" className="about">
                <div className="about_text">
                    <span className = "abt_dis">ABOUT THE DISEASE</span>
                    <h1>CORONAVIRUS (COVID-19)</h1>
                    <h2><strong>COVID-19 is a new illness that can affect your lungs and airways.</strong></h2>
                    <p>caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.</p>
                    <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
                    <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
                </div>
                <div className="about_img_cont">
                    <img src={about_img} className="about_img" alt="" />
                </div>
            </section>

               {/* Intro */}
            <section className="Intro">
                <div className="Int_text">
                    <h1>Doctor Say's</h1>
                    <p>Due to the coronavirus (COVID-19) outbreak, there are different options for accessing health services. This includes telehealth, to help protect patients and health workers and stop the spread of the virus. Some elective surgeries are also available. Find out how to get the health care you need.</p>
                </div>
                <div className="Doct_img_cont">
                    <img src={doctor_gif} className="Doct_img" alt="Doctor" />
                </div>
            </section>

            {/* Prevention  Section*/}

            <section id="Prevention" className="card_section">
                <h1><span>Covid-19</span> Prevention Measures</h1>
                <div className="cards_contain">
                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif1} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Wash Hand</h2>
                            </div>
                        </div>
                        <div className="backFace">
                            <p className="discript">Regular hand-washing is one of the main ways to help prevent the transmission of coronavirus </p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif2} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Social Distance</h2>
                            </div>

                        </div>

                        <div className="backFace">
                            <p className="discript">People should take care to avoid coming into close contact with others especially those who are older, unwell, or have symptoms of the virus.</p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif3} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Were Mask</h2>
                            </div>

                        </div>

                        <div className="backFace">
                            <p className="discript">According to the <span title="World Health Organization">WHO</span> people should wear a face mask in public when it is not possible to maintain at least 1 meter distance from others.</p>

                        </div>
                    </div>
                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif4} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Stay Safe</h2>
                            </div>

                        </div>

                        <div className="backFace">
                            <p className="discript">People should take care to avoid coming into close contact with others especially those who are older, unwell, or have symptoms of the virus.</p>


                        </div>
                    </div>

                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif5} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Feeling Sick</h2>
                            </div>

                        </div>

                        <div className="backFace">
                            <p className="discript">If a person has mild symptoms of COVID-19, they can self-isolate by staying at home and avoiding contact with others.</p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="frontFace">
                            <div className="card_img_container">
                                <img src={card_gif6} className="card_img" alt="wash Hand" />
                            </div>
                            <div className="card_txt">
                                <h2>Work From Home</h2>
                            </div>

                        </div>
                        <div className="backFace">
                            <p className="discript">Try to do work from home if Possible to avoid the public gathering which will decrease the chances of affecting.</p>

                        </div>
                    </div>

                </div>

            </section>

            {/* Symptoms  Section*/}

            <section id="Symptoms" className="Sympt_section">
                <h1 className="Sympt_tit" >Covid-19 Symptoms</h1>
                <div className="Sympt_text">
                    <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization</p>
                    <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
                </div>
                <div className="Sympt">
                    <div>
                        <h1>Most common symptoms:</h1>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  fever</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  cough</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  tiredness</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of taste or smell.</li>
                        </ul>
                    </div>

                    <div className="Sympt_img_cont">
                        <img src={cold} className="Sympt_img" alt="Doctor" />
                    </div>
                </div>

                <div className="Sympt">
                    <div>
                        <h1>Less common symptoms:</h1>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  aches and pains</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  sore throat</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  diarrhoea</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  conjunctivitis</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  headache</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of taste or smell</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  a rash on skin, or discolouration of fingers or toes</li>

                        </ul>
                    </div>
                    <div className="Sympt_img_cont">
                        <img src={headach} className="Sympt_img" alt="Doctor" />
                    </div>
                </div>

                <div className="Sympt">
                    <div>
                        <h1>Serious symptoms:</h1>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  difficulty breathing or shortness of breath</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  chest pain or pressure</li>
                            <li><span><FontAwesomeIcon icon={faArrowRight} /></span>  loss of speech or movement</li>

                        </ul>
                    </div>
                    <div className="Sympt_img_cont">
                        <img src={sick} className="Sympt_img" alt="Doctor" />
                    </div>
                </div>

            </section>

            {/* Vaccine  Section*/}
            <section id="Vaccine" className="Vac_sec">
                <div className="Vac_text">
                    <h1 className="Vac_tit" >Vaccine Available In India</h1>
                    <p><em>India is using three vaccines</em> - the Oxford-AstraZeneca jab, <br />known locally as <span>Covishield</span>;<br />  <span>Covaxin</span> by Indian firm Bharat Biotech;<br /> and Russian-made <span>Sputnik V</span>.</p>
                </div>
                <div className="Vacines_Main_container">
                    <div className="vac_slid">
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

                    <div className="vac_slid">
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

                    <div className="vac_slid">
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

            {/* Contact */}
            <section id ="Contact" className ="contact_sec">
                <div className ="blue"></div>
                <div className ="pink"></div>

                <div className ="contact_Detail_cont">
                    <h3>Contact Us</h3>
                    <h1>Question About COVID-19?</h1>
                    <p>If you have any query about coronavirus or you have a health concern, you can contact via our <span>helpline 111</span> or emergency contact number. You can also contact by submitting form.</p>
                    <h3><span>Emergency</span> Coronavirus Helpline</h3>
                    <h1>1-800-999-9444</h1>
                    <div>
                    <h2>24x7 Medical Help:</h2>
                    <ul>
                        <li><span>Phone</span> : 1-800-911-3939</li>
                        <li><span>Phone</span> : 1-800-911-3939</li>
                        <li><span>Toll Free</span> : 1-800-911-9999</li>
                        <li><span>Email</span> : nitingupta@gmail.com</li>

                    </ul>
                    </div>
                   

                </div>
                <div className ="contact_container">
                    <form>
                        <h1>Get in touch</h1>
                        <div className="name">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="phone" placeholder="Phone" />
                        <textarea rows="5" type="text" placeholder="Message" />
                        <div className="age">
                        <div>
                                <h4>You Have Any Symptoms?</h4>
                                <select>
                                    <option>Yes I got All Symptoms</option>
                                    <option>Yes I got few Symptoms</option>
                                    <option>No i Don't</option>
                                </select>
                            </div>
                            <div>
                                <h4>Age</h4>
                                <select>
                                    <option>0-19 Years</option>
                                    <option>20-40 Years</option>
                                    <option>41 above</option>
                                </select>
                            </div>
                            

                        </div>
                        <button className="submitBtn" type ="submit">Submit <span><FontAwesomeIcon icon = {faRocket}></FontAwesomeIcon></span></button>
                    </form>
                </div>

            </section>
        </div>

            );
}

            export default Main;