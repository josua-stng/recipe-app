import { FormEvent, useEffect, useState } from "react";

import NavbarContent from "../components/NavbarContent";
import NavbarHeader from "../components/NavbarHeader";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import InputPopularRecipe from "../components/InputPopularRecipe";

interface Data {
  id: number;
  name: string;
  image: string;
  content: string;
  link: string;
}
const PopularRecipes = () => {
  const [api, setApi] = useState<Data[]>([]);
  const [inputan, setInputan] = useState("");
  const [loading, setLoading] = useState(false);
  const handleDetailRecipe = async () => {
    setLoading(true);
    const data = await fetch(
      "https://api.spoonacular.com/food/search?apiKey=013ce5402fe84f44a62e3d3bbee25cbe&number=12"
    );
    const response = await data.json();
    setApi(response.searchResults[0].results);
    setLoading(false);
  };
  useEffect(() => {
    handleDetailRecipe();
  }, []);

  const handleInputRecipe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const value = formData.get("search") as string;
    setInputan(value);
    console.log(inputan);
  };
  
  return (
    <div>
      <div className="header">
        <NavbarHeader />
        <div>
          <NavbarContent
            title={"Popular Recipe"}
            descriptionProduct={"Below are various food recipes that you "}
            descriptionName={"can make yourself"}
            image={
              "https://cdn.shopify.com/s/files/1/0506/1135/5854/files/Recipe-Art-3.jpg"
            }
          />
        </div>
      </div>
      {loading ? (
        <h1 className="text-center text-5xl mt-10">Loading ....</h1>
      ) : (
        <div className="bg-gray-100 mt-5">
          <InputPopularRecipe OnChange={handleInputRecipe} />
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  p-1 ">
            {api
              .filter((datas) => {
                if (inputan === "") {
                  return datas;
                } else if (
                  datas.name.toLowerCase().includes(inputan.toLowerCase())
                ) {
                  return datas;
                }
              
                return false;
              })
              .map((data) => {
                return (
                  <div
                    key={data.id}
                    className=" p-5  flex flex-col justify-center"
                  >
                    <img src={`${data.image}`} alt="" />
                    <div className="bg-white p-3">
                      <p className="text-xl truncate font-bold mt-2 mb-3">
                        {data.name}
                      </p>
                      <p
                        className="text-overflow-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {parse(data.content)}
                      </p>

                      <Link
                        to={`${data.link}`}
                        target="_blank"
                        className="flex justify-center mt-3 mb-2  bg-amber-600 p-4 w-[150px]  rounded-lg text-white mx-auto"
                      >
                        See details
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PopularRecipes;
