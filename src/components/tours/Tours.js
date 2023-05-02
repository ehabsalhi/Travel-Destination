import TourDetails from "../TourDetails/TourDetails"
import Tour from "./tour/tour"
import './Tours.css'

export default function Tours (props){
     return (
          <main className="main"> {
               props.data.map(item =>
                    <Tour data = {item} key = {item.id} id= {item.id} /> 
                    )} 
          </main>
     )
}