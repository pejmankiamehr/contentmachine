import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ContentContext } from "./context/ContentContext";

import Login from "./Component/login/Login";
import Panel from "./Component/process/Panel";
import Section1 from "./Component/process/Section1";
import Section2 from "./Component/process/Section2";
import Section3 from "./Component/process/Section3";
import Validate from "./Validate";

//  import { Editor } from "@tinymce/tinymce-react";
// import Texteditor from "./Texteditor.jsx"
// import Menu from "./Component/menu/Menu";

const login = localStorage.getItem("token") == null;

function App() {

  


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route element={<Validate/>}>

          <Route path="/panel" element={<Panel />}>
            <Route index element={<Section1 />} />
            <Route path="/panel/page1" element={<Section1 />} />
            <Route path="/panel/page2" element={<Section2 />} />
            <Route path="/panel/page3" element={<Section3 />} />
          </Route>
          </Route>

        </Routes>
      </BrowserRouter>

      {/* <Editor apiKey='olsfx0ewsj1ldww9h5y392b6r7pfje6dvxqfguyee2i6penb' init={}} />   */}
      {/* <Texteditor/> */}
    </>
  );
}

export default App;
