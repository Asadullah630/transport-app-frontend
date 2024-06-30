import React, { useState} from "react";
import AuthContext from "./Authcontext";

const AuthState = ({children})=>{
const [user, setUser] = useState(null);
const register = async(name, email, password)=>{
    try {
        const response = await fetch("http://localhost:8000/api/users/register",
       {
        method:"POST",
        headers:{
            "content-type":"Application/json",
        },
        body: JSON.stringify({name:name, email:email, password:password})
       }
    )
   const data = await response.json();
   if(data.success){
    localStorage.setItem("token", data.authToken);
    setUser(data.user);
    
   
   }
   else{
    alert("invalid credential");

   }

   
 
        
      } catch (error) {
        console.log(error);
    
        
      }

}

const login = async(email, password)=>{
    const response = await fetch("http://localhost:8000/api/users/login",
    {
     method:"POST",
     headers:{
         "content-type":"Application/json",
     },
     body: JSON.stringify({ email:email, password:password})
    }
 )
const data = await response.json();
if(data.success){
 setUser(data.user);
 localStorage.setItem("token", data.authToken);
 

 
 
}else{
 alert("Invalid credential");
}

}
return <AuthContext.Provider value={{user , register, login, setUser}}>
    {children}
</AuthContext.Provider>
}

export default AuthState