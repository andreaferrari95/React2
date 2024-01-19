import logo from "../assets/react-logo.png";
function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="react-logo" src={logo} alt="React logo" />
        <h3 className="text-logo">ReactFacts</h3>
        <h4 className="nav-course">React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;
