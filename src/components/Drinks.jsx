
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Drinks(){
  const [drinks,setDrinks]=useState([])
  const [search,setSearch]=useState('')

  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res=>res.json())
    .then(data=>setDrinks(data.drinks))
  },[])

  return <div>
    <h1>Mocktail Menu</h1>
    <input placeholder="Search" onChange={e=>setSearch(e.target.value)}/>
    {drinks.filter(d=>d.strDrink.toLowerCase().includes(search.toLowerCase())).map(d=>
      <div key={d.idDrink}>
        <img src={d.strDrinkThumb} width="100" alt={d.strDrink}/>
        <p>{d.strDrink}</p>
        <Link to={'/drinks/'+d.idDrink}>Recipe</Link>
      </div>
    )}
  </div>
}
export default Drinks
