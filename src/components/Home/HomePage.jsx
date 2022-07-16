import Contact from './Contact/Contact';
import Features from './Features/Features';
import Gallery from './Gallery/Gallery';
import Items from './Items/items';
import Navbar from './Navbar/Navbar';
import Order from './Orders/Order';


function HomePage() {
  return (
    <div className="Home">
      <Navbar/>
      <Features />
      <Order />
      <Items />
      <Gallery />
      <Contact />
    </div>
  );
}

export default HomePage;
