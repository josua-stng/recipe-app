const ContributorParticipant = () => {
    return (
        <div className="mt-10 mb-16">
            <div className="text-center mb-4 md:mb-14">
                <h1 className="text-2xl font-bold mb-3">Our Top Contributor</h1>
                <h2 className="font-light">These are the people who have contributed a lot to various recipes</h2>
                <h2 className="font-light">an our platform</h2>
            </div>
            <div className="grid flex-col justify-center items-center gap-16 md:flex-row ">
                <div className="">
                    <img src="https://assets.foxdcg.com/dpp-uploaded/images/hells-kitchen/keyart_s23.jpg " alt="" className="w-[300px] h-[190px]" />

                    <div className="w-36 h-20 flex justify-center flex-col items-center mt-[-60px] shadow-2xl bg-white absolute">
                        <h2>Gordon Ramsey </h2>
                        <h3>456 Recipes</h3>
                    </div>
                </div>

                <div>
                    <img src="https://media.suara.com/pictures/970x544/2022/08/16/55476-profil-uncle-roger-instagramatmrnigelng.jpg" alt="" className="w-[300px] h-[190px]" />
                    <div className="w-36 h-20 flex justify-center flex-col items-center mt-[-60px] shadow-2xl bg-white absolute">
                        <h2>Uncle Roger</h2>
                        <h3>430 Recipes</h3>
                    </div>
                </div>

                <div>
                    <img src="https://cdn.popbela.com/content-images/post/20200227/516645856-e88c8449bc2a143f26e7e718419e790c_750x500.jpg" alt="" className="w-[300px] h-[190px]" />
                    <div className="w-36 h-20 flex justify-center flex-col items-center mt-[-60px] shadow-2xl bg-white absolute">
                        <h2>Chef Juna</h2>
                        <h3>430 Recipes</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContributorParticipant