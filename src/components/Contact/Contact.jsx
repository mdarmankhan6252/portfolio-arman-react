import { Helmet } from "react-helmet";
import './Contact.css'
import contact from '../../assets/portfolio_img/contact.jpeg'
import React from "react";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ab27b3c3-3482-47df-89b9-f3cd8eeed071");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div>
            <Helmet>
                <title>Contact - Arman</title>
            </Helmet>

            <div className='contact'>
                <h1 className='playWrite text-white font-semibold text-3xl sm:text-4xl lg:text-5xl'>Contact With Me</h1>
            </div>
            <div className="max-w-6xl mx-auto flex justify-between mt-20 px-1 flex-col sm:flex-row gap-y-8 items-center">
                <div className="basis-[48%]">
                    <img src={contact} alt="" className="w-full max-w-lg" />
                </div>
                <div className="basis-[48%]">
                    <form onSubmit={onSubmit} className="*:w-full *:p-2 space-y-4 *:border *:border-blue-500 *:outline-none">
                        <input type="text" name="name" id="" placeholder="Your Name" required/>
                        <input type="text" name="phone" id="" placeholder="Phone Number" required/>
                        <textarea name="message" id="" required placeholder="Write Message" rows={6}></textarea>
                        <input type="submit" value="Submit Now" className="border active:bg-blue-500 active:text-white duration-100"/>
                        <p className="border-none text-[#a99999] font-semibold">{result}</p>
                    </form>
                </div>

            </div>
            
        </div>
    );
};

export default Contact;