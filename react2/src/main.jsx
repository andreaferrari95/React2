import ReactDOM from "react-dom/client";
import "./index.css";

const mainContent = (
  <main>
    <h1>React</h1>
    <p>React is a JavaScript library for building user interfaces.</p>
    <ul>
      <li>React</li>
      <li>Angular</li>
      <li>Vue</li>
    </ul>
    <ul>
      <li>Front</li>
      <li>End</li>
      <li>Development</li>
    </ul>
  </main>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContent);
