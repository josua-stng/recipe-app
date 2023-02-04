const Footer =() =>{
    return(
        <div className="mt-20">

           <div className="flex flex-col p-4 md:flex-row md:justify-around md:gap-24">
            <div className="mb-10 leading-7 ">
            <h1 className="mb-2 text-xl "><span className="text-amber-700">Spoonacular</span> <span className="text-lime-700">Recipe</span></h1>
            <p className="md:mt-[150px]">Copyright 2023- SpoonacularRecipe</p>
            </div>

            <div className="mb-10 leading-7 md:leading-[40px]">
                <h1 className="font-bold text-xl mb-1 md:mb-5">Contact</h1>
                <p>admin@spoonacularecipe.com</p>
                <p>081242152519</p>
                <p>(021)</p>
                <p>@spoonacularecipe</p>
            </div>

            <div className="mb-5 leading-7 md:leading-[40px]">
            <p className="font-bold text-xl mb-1 md:mb-5 ">Discovery</p>
            <p>About Us</p>
            <p>Career</p>
            <p>Sitemap</p>
            <p>Privacy policy</p>
        
            </div>

           </div>
        </div>
    )
}

export default Footer