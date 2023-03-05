import CategoryDirectory from "../../components/category-dir/category-dir";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryDirectory />
    </div>
  );
};

export default Home;
