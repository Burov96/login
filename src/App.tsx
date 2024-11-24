import AppRoutes from "./routes/index.routes";
import "./index.scss"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;