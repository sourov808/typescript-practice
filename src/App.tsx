import { Toaster } from "react-hot-toast";
import "./App.css";

import AppRoutes from "./Routes/routes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
