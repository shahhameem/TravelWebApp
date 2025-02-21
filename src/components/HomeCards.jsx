import { BiHotel, BiWater, BiDrink, BiHelpCircle } from "react-icons/bi";
import { Card } from "./Card";

export const HomeCards = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            We provide the best services to make you feel like
            home.
          </p>
        </div>

        <div className="row">
          <Card>
            
              <div className="icon">
                <BiHotel />
              </div>
              <h4 className="title">
                <a href="/hotels">Hotel Booking</a>
              </h4>
              <p className="description">
                Hand Picked best hotels at the
                best places in kashmir.{" "}
              </p>

          </Card>

          <Card>
              <div className="icon">
                <BiWater />
              </div>
              <h4 className="title">
                <a href="/shikaras">Shikara Booking</a>
              </h4>
              <p className="description">
                Enjoy the senic beauty of Dal Lake Srinagar on shikara.
              </p>
          </Card>

          <Card>
              <div className="icon">
                <BiDrink />
              </div>
              <h4 className="title">
                <a href="/foods">Food Ordering</a>
              </h4>
              <p className="description">
                Authentic Kashmiri and Punjabi food. Veg and
                non-veg
              </p>
          </Card>

          <Card>
              <div className="icon">
                <BiHelpCircle />
              </div>
              <h4 className="title">
                <a href="/help">Help</a>
              </h4>
              <p className="description">
                If you need any help we are 24x7 available to serve you.
              </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
