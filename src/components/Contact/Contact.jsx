import { Helmet } from "react-helmet";
import './Contact.css'
import contact from '../../assets/portfolio_img/contact.gif'
const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact - Arman</title>
            </Helmet>

            <div className='contact'>
                <h1 className='playWrite text-white font-semibold text-3xl sm:text-4xl lg:text-5xl'>Contact With Me</h1>
            </div>
            <div className="max-w-6xl mx-auto flex justify-between mt-20">
                <div className="basis-[48%]">
                    <img src={contact} alt="" />
                </div>
                <div className="basis-[48%] bg-blue-50">
                    <form className="*:w-full">
                        <label>Your Name</label>
                        <input type="text" name="name" id="" placeholder="Your Name" required/>
                        <label>Phone Number</label>
                        <input type="text" name="name" id="" placeholder="Phone Number" required/>
                        <label>Write Your Message here</label>
                        <textarea name="message" id="" required placeholder="Write Message" rows={6}></textarea>
                        <input type="submit" value="Submit Now" />
                    </form>
                </div>

            </div>
            
        </div>
    );
};

export default Contact;