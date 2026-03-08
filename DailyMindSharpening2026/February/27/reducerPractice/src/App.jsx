const getData = async (url) =>{
  try{
    let res = await fetch(url);
    let data = await res.json();
    return data;
  }catch(error){
    throw new Error("something went wrong while fetching data");
  }
}

const initState = {
  loading : false,
  data : [],
  error : false
}

const reducer = (state, action) =>{
  switch(action.type){
    case "FETCH_LOADING":{
      return {loading : true, error : false, data:[]};
    }
    case "FETCH_SUCCESS":{
      return {loading:false, data:action.payload, error : false};
    }
    case "FETCH_ERROR":{
      return {loading:false, error : true, data:[]}
    }
    default :{
      throw new Error("Action type is invalid")
    }
  }
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchAndUpdateData = (url) =>{
    dispatch({type : "FETCH_LOADING"});
    getData(url)
      .then((res)=>dispatch({type:"FETCH_SUCCESS", payload:res}))
      .catch(()=>dispatch)
  }
  return (
    <></>
  )
}