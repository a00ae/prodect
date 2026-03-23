import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import "./css/Testimonials.scss"

function Testimonials() {
    const {testimonials} = useBoxData();
  return (
    <div className="testimonials" id="testimonials">
        <div className="container">
            <Box title={testimonials.title} more={testimonials.more} />
        </div>
      
    </div>
  )
}

export default Testimonials
