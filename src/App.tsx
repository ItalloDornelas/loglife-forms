import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes />
    </>
  );
}

export default App;
