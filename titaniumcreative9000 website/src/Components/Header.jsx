import { Link } from "react-router-dom";
import Home from "../Pages/Home"
import AboutMe from "../Pages/AboutMe"
export default function Header(){
    return(
        <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/">Home</Link></li>
          <li className="nav-list-item"><Link to="/about">About Me</Link></li>
        </ul>
      </nav>
    </header>
    )
}