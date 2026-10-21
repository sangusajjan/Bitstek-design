
import HeroCarousel from './HeroCarousel';
import Navbar from './Navbar';
import WhyChooseBitstek from './WhyChooseBitstek';
import './App.css';
import InvestmentOptions from './InvestmentOptions';
import LiveQuotes from './LiveQuotes';
import TradingSteps from './TradingSteps';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />

      {/* New two-slide homepage hero */}
      <HeroCarousel />

      {/* Existing homepage sections */}
      

      <WhyChooseBitstek />
      <InvestmentOptions />
      <LiveQuotes />
      <TradingSteps />

      <Footer />
    </>
  );
}

export default App;
