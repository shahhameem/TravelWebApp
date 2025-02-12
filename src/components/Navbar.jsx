import { NavLink } from "react-router-dom"
const Navbar = () => {
  const linkClass = ({isActive}) => isActive && 'bg-black'
  return (
    <nav id="navbar" className="navbar me-5">
      <ul>
        <li><NavLink className={linkClass} to="/">Home </NavLink> </li>
        <li><NavLink className={linkClass} to="/about">About Us </NavLink> </li>
        <li><NavLink className={linkClass} to="/contact">Contact Us </NavLink> </li>
      </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
  )
}

export default Navbar