import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";

const HomePage = () => {
  return (
    <div>
      <CategoryMenu ></CategoryMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
