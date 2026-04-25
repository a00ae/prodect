import "./App.scss";
import AboutUs from "./componints/AboutUs";
import AltFooter from "./componints/AltFooter";
import Blog from "./componints/Blog";
import Button from "./componints/Button";
import CaseStudy from "./componints/CaseStudy";
import Clients from "./componints/Clients";
import FAQs from "./componints/FAQs";
import Footer from "./componints/Footer";
import Newsletter from "./componints/Newsletter";
import OurTheam from "./componints/OurTheam";
import Pricing from "./componints/Pricing";
import Process from "./componints/Process";
import Services from "./componints/Services";
import Shoppingcart from "./componints/Shoppingcart";
import Studio from "./componints/Studio";
import Testimonials from "./componints/Testimonials";
import Wedght from "./componints/Wedght";
import WhyUs from "./componints/WhyUs";
import { ProductProvider } from "./componints/context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Wedght />
        <Studio />
        <AboutUs />
        <Shoppingcart />
        <Services />
        <Process />
        <WhyUs />
        <Clients />
        <Testimonials />
        <OurTheam />
        <CaseStudy />
        <Pricing />
        <FAQs />
        <Blog />
        <Newsletter />
        <Footer />
        <AltFooter />
        <Button />
      </div>
    </ProductProvider>
  );
}

export default App;
