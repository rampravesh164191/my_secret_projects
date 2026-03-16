export default function Products(){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log("error fetching data", error))
}