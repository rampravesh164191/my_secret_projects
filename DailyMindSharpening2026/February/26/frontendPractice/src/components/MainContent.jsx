import { useEffect, useState } from "react"

export default function MainContent(){
    const [data, setData] = useState(null); 
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState(null);
    useEffect(()=>{
        async function fetchCharacters(){
            try {
                let response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                let data = await response.json();
                //data.results = character data
                //data.info = page data
                console.log(data);
                setData(data.results);
                setInfo(data.info)
            }catch(error){
                console.log("error : ", error.message);
            }
        }
        fetchCharacters();
    },[page]);
    return (
        <>
        <div className="border grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data && (
                data.map(el=>(
                    <div 
                    className="border p-4"
                    key={el.id}
                    >
                        <div>
                            <img
                            className="border mb-2"
                             src={el.image} alt={el.name} />
                        </div>
                        <div>
                            <p className="overflow-hidden">Name : {el.name}</p>
                            <p>Species : {el.species}</p>
                            <p className="overflow-hidden">Location : {el.location.name}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
        <div className="my-2 flex items-center justify-center gap-3">
            <button
            onClick={()=>setPage((prev)=>prev-1)}
            disabled={!info?.prev}
            className="border px-3 bg-white rounded-sm hover:bg-blue-300 hover:cursor-pointer"
            >Prev</button>
            <button 
            className="border px-3 bg-white rounded-sm"
            >{page}</button>
            <button 
            onClick={()=>setPage((prev)=>prev+1)}
            disabled={!info?.next}
            className="border px-3 bg-white rounded-sm hover:bg-blue-300 hover:cursor-pointer"
            >Next</button>
        </div>
        </>
    )
}