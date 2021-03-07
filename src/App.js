import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/index";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
