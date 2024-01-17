import ReactDOM from "react-dom/client";
import "./index.css";

const mainContent = (
  <div>
    <img src="./src/assets/react-logo.png" alt="React Logo" width="40px" />
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContent);
