import './App.css';
import { useState } from "react";

function App() {

const [Nome, setNome]= useState("");
const [Email, setEmail]= useState("");
const [Numero, setNumero]= useState(0);
const [Senha, setSenha]= useState(0);


return (
    <div className="App">
      <div class="information">

      <label >Nome: </label>
      <input type="text" onChange={(event) => setNome(event.target.value)} />
      
      <label>Email: </label>
      <input type="text" onChange={(event) => setEmail(event.target.value)}/>
      
      
      <label>Numero: </label>
      <input type="number" onChange={(event) => setNumero(event.target.value)}/>
      
      <label>Senha: </label>
      <input type="number" onChange={(event) => setSenha(event.target.value)}/>
      
      <button class="button" >Cadastrar
      </button>

      </div>
    </div>
  );
 } 


export default App;
