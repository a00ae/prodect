import { useEffect, useState } from "react";
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
import Load from "./componints/load";

function App() {
  const [loading, setLoding] = useState<boolean>(true);
  useEffect(() => {
    const appDataLoding = async () => {
      try {
        setLoding(true);
        await new Promise((res) => setTimeout(res, Math.random() * 6000 + 500));
        setLoding(false);
      } catch (error) {
        console.log(error, "error in load");
        setLoding(false);
      }
    };
    appDataLoding();
  }, []);
  return (
    <ProductProvider>
      <div className="app">
        <Load load={loading} />
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
