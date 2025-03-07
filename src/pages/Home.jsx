import "../styles/home.css";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Brands from "../components/brands";
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section with Slideshow and Overlay */}
      <div className="hero-section">
        <div className="slideshow-container">
          <Slideshow />
        </div>
        <div className="hero-overlay">
          <h1>Welcome to Cruising 350</h1>
          <p>Discover premium bike accessories for your ultimate ride.</p>
          <a href="/products" className="shop-now">Shop Now</a>
        </div>
      </div>
<Brands/>
     <Footer/>
    </div>
  );
};

export default Home;
