import '../index.css';


const Home = () => {
    return (
        <section id ="Contact" className ="contact_sec">
        <div className ="blue"></div>
        <div className ="pink"></div>

        <div className ="contact_Detail_cont">
            <h3 data-aos="fade-rignt" data-aos-duration="500">Contact Us</h3>
            <h1 data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">Question About COVID-19?</h1>
            <p data-aos="fade-rignt" data-aos-duration="400" data-aos-delay="300">If you have any query about coronavirus or you have a health concern, you can contact via our <span>helpline 111</span> or emergency contact number. You can also contact by submitting form.</p>
            <h3 data-aos="fade-up"><span >Emergency</span> Coronavirus Helpline</h3>
            <h1>1-800-999-9444</h1>
            <div>
            <h2>24x7 Medical Help:</h2>
            <ul>
                <li data-aos="fade-up" data-aos-duration="300"><span  >Phone</span> : 1-800-911-3939</li>
                <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="300"><span >Phone</span> : 1-800-911-3939</li>
                <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="600"><span >Toll Free</span> : 1-800-911-9999</li>
                <li data-aos="fade-up" data-aos-duration="300" data-aos-delay="900"><span>Email</span> : nitingupta@gmail.com</li>

            </ul>
            </div>
           

        </div>
        <div className ="contact_container" data-aos="flip-right" data-aos-duration="300">
            <form>
                <h1 data-aos="fade-down" data-aos-delay="300">Get in touch</h1>
                <div className="name" data-aos="fade-up" data-aos-delay="00">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email"  data-aos="fade-up" data-aos-delay="400"/>
                <input type="phone" placeholder="Phone" data-aos="fade-up" data-aos-delay="500" />
                <textarea rows="5" type="text" placeholder="Message"  data-aos="fade-up" data-aos-delay="600"/>
                <div className="age" data-aos="fade-up" data-aos-delay="700">
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
            </form>
        </div>
    </section>
    );
}

export default Home;