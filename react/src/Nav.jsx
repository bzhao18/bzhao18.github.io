import "./Nav.css"

function Nav() {
    return (
        <nav>
            <p><a href="#top" class="nav-initials">BZ</a></p>
            <div class="nav-items">
                <ul class="nav-bar">
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#experience" class="nav-link">Experience</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav