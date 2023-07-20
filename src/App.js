//import "./styles.css";

//export default function App() {
 // return (
   // <div className="App">
     // <h1>Hello CodeSandbox</h1>
      //<h2>Start editing to see some magic happen!</h2>
    //</div>
  //);
//}
import React ,{useState} from 'react';
import './styles.css';

const App=()=>{
  const [users,setUsers]=useState([]);
  const loadUsers=async()=>{
    const response=await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse=await response.json();
    setUsers(jsonResponse);
  }
  return(
    <div className="App">
      <h1> Hey All </h1>
      <button onClick={loadUsers}> Get Data </button>


      <h2> Users:</h2>
      <ul>
        {users.map(({id,login,avtar_url})=>(
          <li key={id}>Name:{login}
          Avator:{avtar_url}
          </li>
          

        ))}
       
        </ul>
      </div>
  )
}
export default App;