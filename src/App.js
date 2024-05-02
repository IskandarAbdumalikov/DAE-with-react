import "./App.css";
import "./main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/header/header.css";
import "./components/footer/footer.css";
import hero from "./images/hero.svg";
import card1 from "./images/card-1.svg";
import card2 from "./images/card-2.svg";
import toright from "./images/toright.svg";
import toleft from "./images/toleft.svg";
import shampoos from "./images/shampoos.svg";
import girlImg from "./images/girl.svg";
import followCard1 from "./images/folow-1.svg";
import followCard2 from "./images/follow-2.svg";
import followCard3 from "./images/follow-3.svg";
import followCard4 from "./images/follow-4.svg";
import followCard5 from "./images/follow-5.svg";
import followCard6 from "./images/follow-6.svg";



function App() {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <img src={hero} alt="" />
          <div id="hero__bottom">
            <div className="container hero__bottom">
              <h3>Ready To Get Drenched?</h3>
              <h2>Meet Monsoon Moisture Mask</h2>
              <button className="hero__btn">SHOP NOW</button>
            </div>
          </div>
        </div>
        <section id="products">
          <div className="container products">
            <h2>Pick a Pretty Bottle</h2>
            <div className="products__cards">
              <div className="product__card">
                <img src={card1} alt="" />
                <h3>The Daedreamer Set</h3>
                <p>$49.00</p>
              </div>
              <div className="product__card">
                <img src={card2} alt="" />
                <h3>Shampoo</h3>
                <p>$24.00 to $64.00</p>
              </div>
              <div className="product__card">
                <img src={card2} alt="" />
                <h3>Conditioner</h3>
                <p>$24.00 to $64.00</p>
              </div>
            </div>
            <div className="icons df jcsb">
              <img src={toleft} alt="" />
              <img src={toright} alt="" />
            </div>
          </div>
        </section>
        <section className="container sets">
          <img src={shampoos} alt="" />
          <div className="sets__title df jcsb">
            <h3>Feel the warmth of the desert wherever you are.</h3>
            <a href="#">Shop Sets</a>
          </div>
        </section>
        <section id="about">
          <div className="about container df jcsb">
            <div className="about__left">
              <img className="about__left__img" src={girlImg} alt="" />
            </div>
            <div className="about__right dfc">
              <h2>Meet Dae</h2>
              <p>
                We’re a haircare line based in sunny Arizona. Our products are
                made up of the many things that make our home special, including
                the scent of orange blossoms in the air, colors of majestic
                sunsets and nourishing ingredients derived from desert
                botanicals. We believe haircare doesn’t have to be complicated
                and aimed to make a line that is simple and effective. We hope
                that dae plays a special role in your everyday hair routine from
                sunrise to sunset and allows you to feel the warmth of the
                desert wherever you are.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </section>
        <section className="follow__us container dfc gap-50">
          <h3>Follow Us @daehair</h3>
          <div className="follow__us__cards df jcsb gap-20">
            <img src={followCard1} alt="" />
            <img src={followCard2} alt="" />
            <img src={followCard3} alt="" />
            <img src={followCard4} alt="" />
            <img src={followCard5} alt="" />
            <img src={followCard6} alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
