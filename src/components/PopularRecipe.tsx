import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  image: string;
  content: string;
}

const PopularRecipe = () => {
  const [api, setApi] = useState<Data[]>([]);

  const handleAPI = async () => {
    const data = await fetch(
      "https://api.spoonacular.com/food/search?apiKey=013ce5402fe84f44a62e3d3bbee25cbe&number=3"
    );
    const response = await data.json();
    setApi(response.searchResults[0].results);
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <div className="mt-[200px] popular-recipe mb-10 ">
      <div className="text-center pt-[120px] pb-[120px]">
        <div className="pb-5">
          <h1 className="text-4xl font-bold mb-5">Popular Recipes</h1>
          <p>
            Of the thousand of recipes that we have from various regions,this is
            the one
          </p>
          <p>that many people like</p>
        </div>

        <div className="mt-5 grid justify-center items-center gap-10 md:flex md:flex-row">
          {api.map((datas) => {
            return (
              <div key={datas.id}>
                <div className="">
                  <img
                    src={`${datas.image}`}
                    alt="popular_recipe_image"
                    className="h-[350px]"
                  />
                  <div
                    className="border-2 
                                    w-[270px] md:w-[22%] p-10 border-black h-30 flex  flex-col items-center mt-[-150px] shadow-2xl bg-white absolute"
                  >
                    <h2 className="truncate w-full">{datas.name}</h2>
                    <h3 className="pt-5">Type : Cake</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-14">
         <Link to='/recipes'>
         <button className="bg-amber-600 p-4 w-[220px] rounded-lg text-white">
            See All Recipe
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipe;
