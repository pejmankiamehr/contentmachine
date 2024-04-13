import React from "react";
import { Outlet, Navigate } from "react-router-dom";


export default function Validate() {
  const log = localStorage.getItem("token") == null  ;
  // const admin = localStorage.getItem("is_admin") === 0  ;


 
 return (
   <>
   {log ?  <Navigate to="/" replace /> : <Outlet/>}
      
    </>
  );
}
