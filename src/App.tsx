import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientHome } from "./routes/ClientHome";
import { ProductDetails } from "./routes/ProductDetails";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome />}></Route>
      <Route path="product-details" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
