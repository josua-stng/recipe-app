import NavbarContent from "./NavbarContent";
import NavbarHeader from "./NavbarHeader";

const Navbar = () => {
  return (
    <div className="header">
      <NavbarHeader/>
      <NavbarContent 
      title={'Food Recipe'}
      descriptionProduct={'Helping you cook a variety of dishes from all over'}
      descriptionName={'the world'}
      image={'https://pharmeasy.in/conditions/wp-content/uploads/2021/10/Recipes-for-diabetes-vector.png'}
      />
  
    </div>
  );
};

export default Navbar;
