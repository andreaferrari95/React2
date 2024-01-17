import ReactDOM from "react-dom/client";
import "./index.css";

const navbar = (
  <nav>
    <h1>React</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);
