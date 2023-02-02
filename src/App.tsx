import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Participant from './components/Participant';

interface Data {
    id:number,
    name: string,
    image:string,

}

function App() {
    const [api, setApi] = useState<Data[]>([]);

    const handleAPI = async () => {
        const data = await fetch('https://api.spoonacular.com/food/search?apiKey=013ce5402fe84f44a62e3d3bbee25cbe&number=100');
        const response = await data.json();
        setApi(response.searchResults[0].results);

    }

    useEffect(() => {
        handleAPI();
    }, [])

    return (
        <div>
            <Navbar/>
            <Participant/>
            {api.length > 0 && api.map((data) => {
                return (
                    <div key={data.id}>
                        {data.name}
                       <img src={`${data.image}`} alt="" />
                        </div>
                )
            })}
        </div>
    )
}

export default App;