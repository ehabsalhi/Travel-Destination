export default function Tour (props){
     return (
          <main> {
               props.data.map(item =>
                         <div key = {item.name} className = "card">
                              <p>{item.name}</p>
                              <img src = {item.image} alt = {item.name}></img>
                              <hr/>
                         </div>
               )     
          } </main>
     )
}