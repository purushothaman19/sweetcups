import "./Features.css";
import f1 from "./f4.jpg";
import f2 from "./f2.jpg";
import f3 from "./f3.jpg";

function Features() {
    return (
        <section id='feature-section'>

            <div className="uk-child-width-expand@s uk-text-center" uk-grid='true'>
                <div className="uk-card uk-card uk-card-feature">
                    <div className="uk-card-body">
                        <h3 className="uk-card-title feature-title"> Fresh </h3>

                        <div className="uk-card-media-top">
                            <img src={f1} alt="" className="f-img" />
                        </div>
                        <p className="img-p" > Fresh food - good health </p>
                    </div>
                </div>
                <div className="uk-card uk-card uk-card-feature">
                    <div className="uk-card-body">
                        <h3 className="uk-card-title feature-title"> Savour </h3>
                        <div className="uk-card-media-top">
                            <img src={f2} alt="" className="f-img" />
                        </div>
                        <p className="img-p" > Your tongue won't obey you. </p>
                    </div>
                </div>
                <div className="uk-card uk-card uk-card-feature">
                    <div className="uk-card-body">
                        <h3 className="uk-card-title feature-title"> Home Made </h3>
                        <div className="uk-card-media-top">
                            <img src={f3} alt="" className="f-img" />
                        </div>
                        <p className="img-p" > We care the food. </p>
                    </div>
                </div>
            </div>

            <div id="feature-desc">
                <h4>SWEET CUPS - FOR A SWEET TREAT! </h4>
                <p> We cater to sweet cravings for all occasions! </p>

            </div>

        </section>
    )
}

export default Features;