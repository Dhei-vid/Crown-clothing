import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home-components.jsx";
import Navigation from "./routes/navigation/navigation-component.jsx";
import SignIn from "./routes/sign-in/signin-component.jsx";

const Shop = () => {
  return (
    <div>
      <h1> Shop here </h1>
    </div>
  );
};

const App = () => {
  return (
    // using Routes makes the browser expect a route inside the component (these components are just function names)
    // once the path string matches the route it renders the element
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index == true tells the route that when we match the "/" then the home component should be rendered too */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
