import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
export default function Fragment(){


  let Food = ['dal','rice','salad'];
  if(Food.length===0){
    return <h3>I Am Hungry</h3>
  }
else{
return <>

<h1>Healthy Food</h1>
   
   <ul class="list-group">
     {Food.map(item=> <li class="list-group-item " aria-current="true">{item}</li>) }
   </ul>
   
</>
}


}