import Tours from "../tours/Tours";
import Tour from "../tours/tour/tour";
import Data from '../data/db.json'
import { useParams } from "react-router-dom";
import "../TourDetails/TourDetails.css"

export default function TourDetails(props) {
     let id = useParams()
     let show =[]

      for(let i = 0 ; i < Data.length  ; i++){
               if(Data[i].id == id.id){
                    show.push (Data[i])
               }
     }


     function seeMore(){
          let see =   document.querySelector(".seeMore")
          see.classList.toggle("active")

          if(see.classList.contains("active")){
               document.querySelector(".dots").style.display = "none"
               document.querySelector(".btn").textContent = "Read Less"
          }
          
          else{
               document.querySelector(".dots").style.display = "inline"
               document.querySelector(".btn").textContent = "Read More"
          }
     }
     
     return (
          <div className="oneCard">
               <div className="left">
               <p className="p">{show[0].name}</p>
               <img className=     "img" src = {show[0].image} alt = {show[0].name}></img>
               </div>

               <p className="info">{show[0].info.slice(0,200)}
                    <span className="dots">...</span>
                    <span  className="seeMore">{show[0].info.slice(200)}</span>
                    <button className="btn" onClick={seeMore}>Read More</button>
               </p>

          </div>
     );
}


