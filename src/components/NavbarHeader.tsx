import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarHeader = () =>{
    const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);
    return(
        <div>
            <div className="navbar flex justify-between p-6 md:p-7 fixed w-full top-0 z-40">
        <div className="ml-10">
        <Link to='/'>
        <h2 className="text-xl">
            <span className="text-amber-700">Spoonacular</span>{" "}
            <span className="text-lime-700">Recipe</span>
          </h2></Link>
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
            <Link to='/recipes'> <li className="mr-10">Popular Recipe</li></Link>
            <li className="mr-10">Contributor</li>
            <li className="mr-10">All Recipe</li>
          </ul>
        </div>
      </div>
        </div>
    )
}

export default NavbarHeader