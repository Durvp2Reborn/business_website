import './App.css'
import { useNavigate, Link} from 'react-router';

import './index.css';

export function NavBar() {



    const navigate = useNavigate();

    const handleGoToHome = () => {
      navigate('/');
    };
  const handleGoToProducts = () => {
    navigate('/Products');
  };
  const handleGoToCart = () => {
    navigate('/Cart');
  };

    return (
        <div>
          <button onClick={handleGoToHome}>Go to Home</button>
          <button onClick={handleGoToProducts}>Go to Products</button>
          <button onClick={handleGoToCart}>Go to Cart</button>
        </div>
    );
}

function App() {
  return (
    <div>
      <div className="home-header">
        <h1>Welcome to The Sweet Garden</h1>
        <h2 className="subtitle">Discover our stress-free, sustainable event planning & curated products</h2>
        <Link className="product-action" to="/src/Products">Shop Now</Link>
      </div>

      <div className="company-section">
        <div className="container-lg">
          <section className="mission-statement">
            <h3>Mission Statement</h3>
            <p>At The Sweet Garden, our mission is to craft joyful, seamless celebrations that make life's sweetest moments truly unforgettable. We are committed to excellence for all your event planning needs and will work to make it an unforgettable night.</p>
          </section>

          <section className="company-desc">
            <h3>Company Description</h3>
            <p>The Sweet Garden is a Manhattan-based event planning company specializing in stress-free, customizable celebrations with a focus on sustainability and cost-efficiency. Founded by co-CEOs Yuridia Jose and Elena Curcio, the company leverages long-standing vendor relationships to provide comprehensive event services including catering, floral design, entertainment coordination, and venue styling. With a commitment to eco-friendly practices and personalized attention to detail, The Sweet Garden transforms life's sweetest moments into unforgettable experiences while removing the burden of coordination from their clients.</p>
          </section>

          <section className="leadership">
            <h3>Leadership Team</h3>
            <div className="leadership-grid">
              <div className="leader-card">
                <h4>Yuridia Jose — Co-CEO</h4>
                <p>Holds degrees in business and design; oversees all company operations</p>
              </div>
              <div className="leader-card">
                <h4>Elena Curcio — Co-CEO</h4>
                <p>Expertise in hospitality, business, and visual arts; ensures meticulous focus across all events</p>
              </div>
              <div className="leader-card">
                <h4>John Ryder — Head of Catering</h4>
                <p>Business Management background</p>
              </div>
              <div className="leader-card">
                <h4>Glenda Nelson — Head of Entertainment</h4>
                <p>Business degree, entertainment coordination</p>
              </div>
              <div className="leader-card">
                <h4>Jelena Bogo — Head of Floral Designs</h4>
                <p>Design and Business Management</p>
              </div>
              <div className="leader-card">
                <h4>Catherine Stewart — Creative Designer</h4>
                <p>Hospitality degree, creative direction</p>
              </div>
              <div className="leader-card">
                <h4>Chris Hoppers — Assistant Planner</h4>
                <p>Supports planning and operations</p>
              </div>
            </div>
          </section>

          <section className="products-offered">
            <h3>Our Signature Offerings</h3>
            <div className="product-list">
              <div className="product-offer">
                <h4>The Sweet Garden Signature Wedding Cake</h4>
                <p>A show-stopping custom wedding cake available in multiple tiers and flavors. Hand-piped buttercream or fondant with optional decorative elements like fresh edible flowers, gold leaf accents, or custom sugar work. Customized to match your wedding colors and style.</p>
              </div>
              <div className="product-offer">
                <h4>Everlasting Garden Centerpiece Collection</h4>
                <p>Luxurious floral centerpieces in three signature styles — Romantic Garden, Modern Minimalist, and Vintage Elegance. Crafted in premium vessels and designed with seasonally-sourced, sustainable blooms.</p>
              </div>
              <div className="product-offer">
                <h4>Artisan Charcuterie & Grazing Tables</h4>
                <p>Gourmet grazing displays with cheeses, cured meats, seasonal fruits, honeycomb, nuts, olives, and artisan crackers presented on wooden boards or marble slabs. Available in sizes for intimate gatherings to grand feasts.</p>
              </div>
            </div>
          </section>

          <section className="about-us">
            <h3>About Us</h3>
            <h4>Our Story</h4>
            <p>The Sweet Garden blossomed from a shared vision between co-founders Yuridia Jose and Elena Curcio, who recognized that life's most precious moments deserve to be celebrated without the overwhelming stress of coordination. With combined expertise in business, design, hospitality, and visual arts, they built a company that prioritizes both beauty and peace of mind.</p>

            <h4>Our Values</h4>
            <ul className="values-list">
              <li>Excellence in Every Detail — We obsess over details so you don't have to.</li>
              <li>Environmental Stewardship — Sustainable practices in all aspects of planning.</li>
              <li>Transparent Communication — Direct, honest dialogue throughout the planning journey.</li>
              <li>Cost-Conscious Luxury — Access to exclusive pricing without compromising quality.</li>
            </ul>

            <h4>What Sets Us Apart</h4>
            <p>Located in the heart of Manhattan, we've cultivated deep partnerships with the city's most talented vendors, allowing us to secure preferential pricing and priority booking. We bring a collaborative, creative approach that honors your unique story while handling all logistics.</p>

            <h4>Our Approach</h4>
            <p>Every client journey begins with an in-depth consultation. Our specialized team members come together to create a cohesive plan while you stay as involved as you wish. We manage every moving part so you can enjoy the event.</p>

            <h4>Why Choose The Sweet Garden?</h4>
            <p>Whether you're planning an intimate gathering or a grand celebration, we transform your vision into reality with artistry, precision, and care. Our commitment to sustainability and customer satisfaction makes us more than event planners — we are partners in celebration.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
