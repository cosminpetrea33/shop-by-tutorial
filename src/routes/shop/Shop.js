import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categoriesPreview";
import Category from "../category/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
};
export default Shop;
