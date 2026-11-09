import { Link } from "react-router-dom";
import Home from "../Pages/Home"
import AboutMe from "../Pages/AboutMe"
import Dropdown from "../Components/Dropdown"

const comicChapters = [
  {label: "Chapter 5", value: '5'}
]
export default function Header(){
    return(
        <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/">Home</Link></li>
          <li className="nav-list-item"><Link to="/about">About Me</Link></li>
          <li className = "nav-list-item"><Link to="/gallery">Gallery</Link></li>
          <li className = "nav-list-item"><Link to="/comics">Comics</Link></li>
          <li className = "nav-list-item"><Link to="/videos">Videos</Link></li>
        </ul>
      </nav>
    </header>
    )
}