
import "./Contact.css";
import logo from "./logo2.png";

function Contact() {

    return (
        <section id="contact-section">

            <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center" uk-grid='true'>
                <div>
                    <div>
                        <div className="uk-card uk-card-contact uk-card-body">
                            <h2 className="contact-title"> Contact Us </h2>

                            <div className="uk-width-1-1@s uk-width-2-1@m uk-width-2-1@l">

                                <ul className="uk-nav-default contact-ul uk-nav-parent-icon" uk-nav='true'>
                                    <li className="contact-li" > <a> <img className='contact-icon' src="https://img.icons8.com/fluency/30/000000/ringing-phone.png" alt=""/> +91­82172 61791  </a></li>
                                    <li className="contact-li" > <a> <img className='contact-icon' src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/30/000000/external-mail-mail-vitaliy-gorbachev-blue-vitaly-gorbachev-9.png" alt=""/> mail@mail.com </a></li>
                                    <li className="contact-li" > <a> <img className='contact-icon'  src="https://img.icons8.com/flat-round/30/000000/anchor-nodes.png" alt=""/>  <span>Jayanagar, Bangalore</span> </a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-contact-2 uk-card-body">
                            <img src={logo} alt="" id='logo' />
                            <h2 className="contact-title logo-name"> Sweetcups <span> Bangalore </span> </h2>
                            <p> Since 2002 </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}


export default Contact;