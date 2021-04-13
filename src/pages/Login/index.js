import React, { useState } from 'react';
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";


function Login() {

  const [email, SetEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return(
  
  <div className="Login">

      <div className="Login-Logo">
      
      </div>

     <div className="Login-Bellow"> 
     <h1>Acessar o App</h1>
     

     <div className="Login-InputEmail">
     <MdEmail />
     <input type="text" placeholder="Digite seu E-Mail"
     value={email}
     onChange={e => SetEmail(e.target.value)}
     />

     </div>

     <div className="Login-InputSenha">
       <MdLock />
     <input 
     placeholder="Digite sua Senha"
     type={show ? "text" : "password"}
     value={password}
     onChange={e => setPassword(e.target.value)}
     />
     <div className="login-eye">
       {show ? (
         <HiEye 
         size={20}
         onClick={handleClick}/>
       ): (
         <HiEyeOff
          size={20}
          onClick={handleClick}/>
       )}

     </div>
     </div>

     <button type="submit">Entrar</button>

     <button type="submit">Cadastrar</button>
    </div>
  </div>
)
}

export default Login