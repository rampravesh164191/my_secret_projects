import { useEffect, useState } from "react"

export default function MainContent(){
    const [data, setData] = useState(null); 
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
        async function fetchCharacters(){
            setLoading(true);
            setError(null);
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
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchCharacters();
    },[page]);
    return (
        <>
        {loading && (
            <div>loading...</div>
        )}
        {error && (
            <div className="text-red-500">{error}</div>
        )}
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-3 p-4">
            {data && (
                data.map(el=>(
                    <div 
                    className="border p-4 bg-white flex flex-col items-center rounded-lg"
                    key={el.id}
                    >
                        <div>
                            <img
                            className="mb-2"
                             src={el.image} alt={el.name} />
                        </div>
                        <div>
                            <p className="overflow-hidden text-center">Name : {el.name}</p>
                            <p className="text-center">Species : {el.species}</p>
                            <p className="overflow-hidden text-center">Location : {el.location.name}</p>
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