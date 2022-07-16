import './items.css';
import cake from "./cake1.jpg"
import ccake from "./ccake1.jpg"
import cookie from "./cookie2.jpg"
import choco from "./choco2.jpg"
import gh from "./hamper2.jpg"

function Items() {

    return (
        <section id='items-section'>

            <div id='item-h3-section'>
            <h3 id='items-h3'> SweetCups Bangalore serves the following freshly made and custom made-to-order </h3>
            </div>

            <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s first-section uk-text-center" uk-grid='true'>
                <div>
                    <div>
                        <div className="uk-card uk-card-item uk-card-body">
                            <img className='item-img' src={cake} alt=''/>
                            <h3 className="uk-card-title item-title"> Cakes </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-item uk-card-body">
                        <img className='item-img' src={ccake} alt=''/>

                            <h3 className="uk-card-title item-title"> Cup Cakes </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-item uk-card-body">
                        <img className='item-img' src={choco} alt=''/>

                            <h3 className="uk-card-title item-title"> Chocolates </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center second-row" uk-grid='true'>
                <div>
                    <div>
                        <div className="uk-card uk-card-item uk-card-body">
                        <img className='item-img t-row' src={cookie} alt=''/>

                            <h3 className="uk-card-title item-title"> Cookies </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-item uk-card-body">
                        <img className='item-img t-row' src={gh} alt=''/>

                            <h3 className="uk-card-title item-title"> Gift Hampers </h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}


export default Items