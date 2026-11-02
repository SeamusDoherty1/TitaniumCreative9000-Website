import HeroImg from "./assets/hero.png"
export default function Header(){
    return(
        <header className="Header">
            <img src={HeroImg} className="logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">Gallery</li>
                    <li className="nav-list-item">Updates</li>
                    <li className="nav-list-item">Comic</li>
                </ul>
            </nav>
        </header>
    )
}