import { Link } from "react-router-dom"
import "../tour/tour.css"

export default function Tour(props){
    return (
          <Link to={`/city/${props.data.id}`}  >
               <div className =   "card">
                    <img src = {props.data.image} alt = {props.data.name}></img>
                    <p>{props.data.name}</p>
               </div>
          </Link>

     )
}