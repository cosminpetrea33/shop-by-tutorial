import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/checkout/checkout";
import HomePage from "./routes/home/HomePage";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/signIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route path="signin" element={<SignIn></SignIn>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
