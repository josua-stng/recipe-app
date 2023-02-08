interface InputPopularRecipeProps{
    OnChange:(event:React.FormEvent<HTMLFormElement>)=> void;
}

const InputPopularRecipe =({OnChange}:InputPopularRecipeProps) =>{
    return(
        <div className="text-center pt-5 pb-5">
            <form action="" onSubmit={OnChange}>
                <input 
                type="text" 
                placeholder="search recipe"
                className="mr-5 w-2/3 h-[35px] p-2"
                name="search" />
                <button className="bg-blue-300 p-1 w-[80px] rounded-lg">Search</button>
            </form>
        </div>
    )
}

export default InputPopularRecipe