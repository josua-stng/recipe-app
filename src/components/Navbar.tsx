import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="header">
      <div className=" flex justify-between p-7 ">
        <div className="ml-10">
          <h2 className="text-xl">
            <span className="text-amber-700">Spoonacular</span>{" "}
            <span className="text-lime-700">Recipe</span>
          </h2>
        </div>

        <div>
          <button className="md:hidden" onClick={handleToggleOpen}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars4Icon className="w-6 h-6" />
            )}
          </button>
          <ul
            className={`${
              isOpen
                ? "flex fixed right-5 top-16  leading-[50px] pl-5 bg-orange-200 flex-col"
                : "hidden md:flex"
            }`}
          >
            <li className="mr-10">Popular Recipe</li>
            <li className="mr-10">Contributor</li>
            <li className="mr-10">All Recipe</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-4 pb-10 mx-auto pl-5 items-center justify-center md:flex md:flex-row">
        <div className="mr-10">
          <h1 className="text-5xl font-mono">Food Recipe</h1>
          <p className="text-lg mt-2 font-serif">
            Helping you cook a variety of dishes from all over{" "}
          </p>
          <p className="text-lg  font-serif">the world</p>
        </div>

        <div>
          <img
            src="https://pharmeasy.in/conditions/wp-content/uploads/2021/10/Recipes-for-diabetes-vector.png"
            className="w-[400px] h-[400px] overflow-hidden rounded-full bg-red"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
