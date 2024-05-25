import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./App.css";

function App(){

 let  [location,setLocation] =useState("")
 let [locationName,setLocationName]=useState([])

   useEffect(()=>{
axios.get(`https://restcountries.com/v3.1/name/${location}`)
.then((res)=>{
setLocationName(res.data);
}).catch((err)=>{
console.log(err);
})
   },[location])

  return (
    <div className='searchStyle'>
<div className='searchBox'>
<input
value={location}
onChange={(e)=>{
setLocation(e.target.value)
}}
class="form-control " type="search" placeholder="Type Something?" />

<div className='search-btn' >
<i class="fa-solid fa-magnifying-glass"></i>
</div>
</div>

<ol>
{locationName.map((suggestion,i)=>{
        return <li className='listName'>{suggestion.name.common}</li>
  
    })}
</ol>
    </div>
  )
}

export default App