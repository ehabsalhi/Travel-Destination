import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tour from '../tours/Tours';
import Data from '../data/db.json'

export default function Home (){
     return (
          <div className = "home">
               <Header/>
               <Tour data ={Data}/>
               <Footer/>
          </div>
     )
}