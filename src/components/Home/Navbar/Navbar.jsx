import React from "react";
import "./navbar.css";
import logo from "./logo.png";

export default class Navbar extends React.Component {

    componentDidMount() {
        const Ulkitscript1 = document.createElement("script");
        Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js";
        Ulkitscript1.async = true;

        const Ulkitscript2 = document.createElement("script");
        Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js";
        Ulkitscript2.async = true;

        const scriptText = "document.addEventListener('DOMContentLoaded', function(){ \n" +
            "const screenSize = screen.width; \n" +
            "if(screenSize <= 425){ \n" +
            "document.querySelector('#uk-top').style.cssText = 'background-size: 100% 120% !important'; \n" +
            "}else\n" +
            "if(screenSize <= 598){ \n" +
            "document.querySelector('#uk-top').style.cssText = 'background-size: 140% 120% !important'; \n" +
            "}});\n";

        const scriptTag = document.createElement("script");
        scriptTag.async = true;
        scriptTag.text = scriptText;

        document.body.appendChild(Ulkitscript1);
        document.body.appendChild(Ulkitscript2);
        document.body.appendChild(scriptTag);

    }

    render() {

        return (
            <section id="nav-section">

                <div id="uk-top">

                    <nav className="uk-navbar-container" uk-navbar='true'>
                        <div className="uk-navbar-center">
                        <a id="brand" href="/"> <img alt="" src={logo} /> </a>
                            <ul className="uk-navbar-nav">
                                <li><a href="#feature-section"> About </a></li>
                                <li><a href="#gallery-section"> Gallery </a></li>
                                <li><a href="#contact-section"> Contact </a></li>
                                <li><a href="#order-section"> Order Now </a></li>
                            </ul>

                        </div>
                    </nav>

                    <div className="uk-card nav-card uk-card-body uk-width-1-2@m uk-width-1-2@l">
                        <h3 className="uk-card-title brand-title"> <img alt="" src={logo} /> </h3>
                        <div className="uk-width-1-2@m uk-text-center nav-link-section">

                            <ul className="nav-ul">
                                <li><a href="#feature-section"> About </a></li>
                                <li><a href="#contact-section"> Contact </a></li>
                                <li><a href="#gallery-section"> Gallery </a></li>
                                <li><a href="#order-section"> Order Now </a></li>
                            </ul>

                        </div>
                    </div>

                    <div className="uk-card uk-card-body" id="vr-card">
                        <h3 className="uk-card-title vr-title"> Wanna See Us ? </h3>
                        <p className="vr-desc"> Click here to Experience Virtual Reality Based cake shop </p>
                        <a href="https://eloquent-bartik-8f7cbf.netlify.app/" target='_blank'> <button className="uk-button vr-button"> Visit Us </button> </a>
                    </div>


                </div>

                <div className="uk-card uk-card-body" id="vr-card-2">
                    <h3 className="uk-card-title vr-title"> Wanna See Us ? </h3>
                    <p className="vr-desc"> Click here to Experience Virtual Reality Based cake shop </p>
                    <a href="https://eloquent-bartik-8f7cbf.netlify.app/" target='_blank'> <button className="uk-button vr-button"> Visit Us </button> </a>
                </div>

            </section>
        )

    }

};