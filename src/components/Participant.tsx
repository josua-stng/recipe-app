const Participant = () => {
    return (
        <div className="participant pt-[50px] pb-[50px]">
            <div className="flex gap-5  flex-col justify-evenly items-center md:flex-row">
                <div className="flex flex-col items-center pb-5">
                    <h1 className="text-4xl font-bold text-red-600 md:text-5xl">450K+</h1>
                    <h2 className="pt-2 text-2xl text-red-500">Recipes</h2>
                </div>
                <div className="flex flex-col items-center pb-5">
                    <h1 className="text-4xl font-bold text-red-600 md:text-5xl">800+</h1>
                    <h2 className="pt-2 text-2xl text-red-500">Cities</h2>
                </div>
                <div className="flex flex-col items-center pb-5">
                    <h1 className="text-4xl font-bold text-red-600 md:text-5xl">5000+</h1>
                    <h2 className="pt-2 text-2xl text-red-500">Contributor</h2>
                </div>
            </div>
        </div>
    )
}

export default Participant