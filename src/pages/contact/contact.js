import React from "react";
import "./style.css";
import bgImage from "./images/contact.jpg";


const Contact = () => {
    return (
        <section class="about" >
            <div id="background" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "-1",
            filter: "brightness(90%)"
          }}>
            </div>
            <div class="htu-body">
                <h1>CONTACT US</h1>
                <hr class="pdivider" />
                <p>Irena Pozgaj - Jones: <a href="mailto:irena.pozgajjones@georgiancollege.ca">irena.pozgajjones@georgiancollege.ca</a></p>
                <p>Shaun Alfonso: <a href="mailto:shaun.alfonso@georgiancollege.ca">shaun.alfonso@georgiancollege.ca</a></p>
                <p>Alexis Tennent: <a href="mailto:alexis.tennent@georgiancollege.ca">alexis.tennent@georgiancollege.ca</a></p>

            </div>
        </section>
    );
};

export default Contact;
