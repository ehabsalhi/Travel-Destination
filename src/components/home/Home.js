import Header from '../header/Header';
import Footer from '../footer/Footer';
import Data from '../data/db.json'
import Tours from '../tours/Tours';
import { Route, Routes } from 'react-router-dom';
import TourDetails from '../TourDetails/TourDetails';
import '../home/Home.css'

export default function Home (){
     return (
          <div>
               <Header/>

               <Routes>
                    <Route path='/' element = {<Tours  data ={Data} />}/>
                    <Route path='/city/:id' element = {<TourDetails />}/>
               </Routes>
        
               <Footer/>
          </div>
     )
}