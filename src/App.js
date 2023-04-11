import { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

import { checkUserSession } from "./store/user/user.action";

const SplitBundler = (link) => lazy(() => import(`${link}`));

const Home = SplitBundler("./routes/home/home-components");
const Authentication = SplitBundler(
  "./routes/Authentication/authentication-component"
);
const Shop = SplitBundler("./routes/shop/shop-components");
const CheckOut = SplitBundler("./routes/checkout/checkout-component");
const Navigation = SplitBundler("./routes/navigation/navigation-component");

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
