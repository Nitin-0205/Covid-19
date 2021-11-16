import '../index.css';
import card_gif1 from "../img/wash_hand.gif";
import card_gif2 from "../img/social-distancing.gif";
import card_gif3 from "../img/were_mask.gif";
import card_gif4 from "../img/stay-safe.gif";
import card_gif5 from "../img/sick.gif";
import card_gif6 from "../img/work_home.gif";

const Prevention = () => {
    return (
        <section id="Prevention" className="card_section">
                <h1 data-aos="fade-down"><span>Covid-19</span> Prevention Measures</h1>
                <div className="cards_contain" >
                    <div className="cards" data-aos="fade-right">
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

                    <div className="cards" data-aos="zoom-in">
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

                    <div className="cards" data-aos="fade-left">
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
                    <div className="cards" data-aos="fade-right">
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

                    <div className="cards" data-aos="zoom-in">
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

                    <div className="cards" data-aos="fade-left">
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
        
    );
}

export default Prevention;