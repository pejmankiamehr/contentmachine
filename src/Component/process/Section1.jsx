import React, { useState } from "react";
import Spinner from "../Spinner";
import axios from "axios";

import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddIcon from "@mui/icons-material/Add";
import Texteditor from "./Texteditor";

export default function Section1() {
  const [title, Settitle] = useState("");
  const [brief, Setbrief] = useState("");
  const [loading, Setloading] = useState(false);

  // const [content, Setcontent] = useState("");
  // const [Id, SetId] = useState("");
  const [text, settext] = useState([]);
  

  const createText = (event) => {
    event.preventDefault();
    

    var axios = require("axios");
    var data = JSON.stringify({
      title: "title",
      brief: "brief",
    });

    var config = {
      method: "post",
      url: "http://api.idekr.com/microservice/v1/generator/text",
      headers: {
        "Platform-Version": "frontend_v1.0.0",
        "Accept-Language": "fa_ir",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjUxNDUxNDAsInJvbGUiOiJjbGllbnQiLCJ1c2VyX2lkIjoxLCJ1c2VyX3Nlc3Npb25faWQiOjF9.Tqm6SYwevOKsVhPwsWZWZ5OXI4JGj6kAJ6H51xLGFSI",
        "Content-Type": "application/json",
      },
      data: data,
    };
   

    axios(config)
      .then((response) => {
        Setloading(true)
       
      
        
        let idd =JSON.stringify(response.data.data[0].id)
        let contentt =JSON.stringify(response.data.data[0].content)
        const te =response.data.data
        console.log(te)
        
        // Setcontent(idd)
        // Setcontent(contentt)
        
        settext(te)
        Setloading(false)

      })
      .catch((error) => {
        Setloading(false)
        console.log(error);
      });

    // const text =JSON.stringify({

    //   title: title,
    //   brief: brief,
    // })
    // axios
    //   .post(" http://api.idekr.com/microservice/v1/generator/text",{text})
    //   .then((response) => {
    //     console.log(response);
    //     console.log(2);
    //     const cont=response.data.content;
    //     const id=response.data.id;
    //     Setcontent(cont)
    //     Setid(id)

    //     // reset();
    //     alert("ok");
    //     // window.location.reload()
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("notok");
    //   });
  };
 

  return (
    <Box sx={{ background: "#f9f9f9", height: "100%" }}>
      <Grid container>
        <Grid item md={12} lg={12}>
          <Box sx={{ background: "white", height: "64px", paddingRight: "2em", paddingTop: "20px", boxSizing: "border-box", marginBottom: "1.3em" }}>
            <Typography sx={{ color: "rgba(61, 108, 180, 1)", fontSize: "16px", fontWeight: 400 }}>نویسنده هوشمند ایدکر</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={5} lg={5}>
          <Box sx={{ background: "white", height: "100%", padding: "1em", boxSizing: "border-box" }}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => Settitle(e.target.value)}
              placeholder="عنوان متن"
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                boxSizing: "border-box",
                padding: "0 1em",
                marginTop: "3em",
                border: "thin solid rgba(237, 237, 237, 1)",
              }}
            />
            <textarea
              type="text"
              name="brief"
              value={brief}
              onChange={(e) => Setbrief(e.target.value)}
              placeholder="حلاصه ای از متن"
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "96px",
                maxHeight: "96px",
                borderRadius: "8px",
                boxSizing: "border-box",
                padding: "1em",
                marginTop: "3em",
                border: "thin solid rgba(237, 237, 237, 1)",
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                type="submit"
                onClick={createText}
                variant="contained"
                size="large"
                sx={{ width: "80%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}
              >
                ایجاد متن
              </Button>
              <Button variant="contained" size="large" sx={{ width: "10%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}>
                <RefreshIcon />
              </Button>
            </Box>

            {loading ? <Spinner /> : (

            <Box>

            {text.map((row) => {
                  return (
                    <Box
                    sx={{
                      width: "100%",
                      height: "274px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      padding: "1em",
                      marginTop: "3em",
                      border: "thin solid rgba(237, 237, 237, 1)",
                    }}
                    key={row.id}
                    >
                      <Box sx={{height:"160px",marginBottom:"1em",overflow:"auto"}}>
                  
                      <Typography >
                    {row.content}
                      </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between",marginTop:"1em" }}>
                      <Button variant="contained" size="large" sx={{ width: "10%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}>
                        <ContentCopyIcon />
                      </Button>
                      <Button variant="contained" size="large" sx={{ width: "10%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}>
                        <BookmarkBorderIcon />
                      </Button>
                      <Button variant="contained" size="large" sx={{ width: "10%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}>
                        <SearchIcon />
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        size="large"
                        sx={{ width: "50%", mt: 3, background: "rgba(61, 108, 180, 0.2)", color: "#0D47A1" }}
                      >
                        اضافه به ویرایشگر{"  "}
                      </Button>
                    </Box>
                  
                  
                    </Box>
                  
                  );
                })}
  
            </Box>
 )}
  
  

  <Divider sx={{margin:"1em 0"}}/>
   


           




          
          </Box>
        </Grid>
        <Grid item md={7} lg={7}>
          <Box sx={{ background: "white", minHeight: "648px", height: "100%", padding: "1em", boxSizing: "border-box" }}>
            <Texteditor />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
