
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function DrinkDetails(){
  const {id}=useParams()
  const [d,setD]=useState(null)

  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
    .then(r=>r.json()).then(data=>setD(data.drinks[0]))
  },[id])

  if(!d) return <p>Loading</p>

  return <div>
    <h1>{d.strDrink}</h1>
    <img src={d.strDrinkThumb} width="150" alt={d.strDrink}/>
    <p>{d.strCategory} | {d.strGlass}</p>
    <h3>Ingredients</h3>
    {Array.from({length:15},(_,i)=>i+1).map(i=>d['strIngredient'+i]&&
      <p key={i}>{d['strMeasure'+i]} {d['strIngredient'+i]}</p>
    )}
    <h3>Instructions</h3>
    <p>{d.strInstructions}</p>
  </div>
}
export default DrinkDetails
