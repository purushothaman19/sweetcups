import "./Gallery.css";
import img1 from "./gallery1.jpg";
import img2 from "./gallery2.jpg";
import img3 from "./gallery3.jpg";
import img4 from "./gallery4.jpg";


function Gallery() {

    return (
        <section id='gallery-section'>

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull">

                <h2 id='gallery-heading'> Gallery </h2>
                <p id="gallery-p" > ~ Swipe to see our delicious products ~ </p>

                <ul className="uk-slideshow-items">
                    <li>
                        <img src={img1} alt="" uk-cover='true' uk-img="target: !.uk-slideshow-items" />
                    </li>
                    <li>
                        <img src={img2} alt="" uk-cover='true' uk-img="target: !.uk-slideshow-items" />
                    </li>
                    <li>
                        <img src={img3} alt="" uk-cover='true' uk-img="target: !.uk-slideshow-items" />
                    </li>
                    <li>
                        <img src={img4} alt="" uk-cover='true' uk-img="target: !.uk-slideshow-items" />
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous='true' uk-slideshow-item="previous"> </a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next='true' uk-slideshow-item="next"> </a>

            </div>

            <p className="gallery-desc"> ~ A ready-to-eat slice of heaven ~ </p>

        </section>
    )

}


export default Gallery;