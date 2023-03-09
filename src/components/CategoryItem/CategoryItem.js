import { useNavigate } from "react-router-dom";

import classes from "./CategoryItem.module.scss";

const CategoryItem = (props) => {
  const { imageUrl, title, route } = props.category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className={classes.categoryContainer} onClick={onNavigateHandler}>
      <div
        className={classes.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={classes.categoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
