import Navbar from "./Navbar";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header id="header" className="header fixed-top">
      <div className="flex justify-between items-center">
        <div className="ms-5">
          <img src={logo} alt="" class="img-fluid rounded-full" width="100px" />
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
