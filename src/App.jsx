import { BrowserRouter } from "react-router-dom";
import "../src/index.css";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
