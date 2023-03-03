import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home-components";
import Navigation from "./routes/navigation/navigation-component";
import Authentication from "./routes/Authentication/authentication-component";
import Shop from "./routes/shop/shop-components";
import CheckOut from "./routes/checkout/checkout-component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    // using Routes makes the browser expect a route inside the component (these components are just function names)
    // once the path string matches the route it renders the element
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index == true tells the route that when we match the "/" then the home component should be rendered too */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
