import React from "react";
import {Link} from "react-router-dom";

function Contact() {
  return (
      <div>
          <h3 className="cont" >Contact</h3>
          <div className="conTact">
          <p className="links">
              <div>
                  <p className="contactInfo">Phone number:</p>
                  <Link to="+254710112271" >+254710112271</Link>
              </div>
              <hr></hr>
                  <div>
                      <p className="contactInfo">Linkedin:</p>
                      <Link to="https://www.linkedin.com/in/mariam-ali-71246a179">https://www.linkedin.com/in/mariam-ali-71246a179</Link>
                    </div>
                  <hr></hr>
              <div>
                  <p className="contactInfo">Email:</p>
                  <Link to="ali.mariam.mwanasiti@gmail.com">ali.mariam.mwanasiti@gmail.com</Link>
                  </div>

        
          </p>
          <hr></hr>
          <Link to="https://www.linkedin.com/in/mariam-ali-71246a179"><i class="fa-brands fa-linkedin"></i></Link>  <Link to="https://twitter.com/m_aliy_?t=mek5FMvqz10d-arcB6_Akg&s=09"><i class="fa-brands fa-twitter"></i></Link>   <Link to="https://github.com/mwanasiti"><i class="fa-brands fa-github"></i></Link> <Link to="071928809"><i class="fa-brands fa-telegram"></i></Link>  <Link to="https://github.com/mwanasiti"><i class="fa-brands fa-instagram"></i></Link>
          </div>
      </div>
    
    
  );
}

export default Contact;