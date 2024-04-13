import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

import './Menustyle.css'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import { useNavigate } from "react-router-dom";

// icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // let navigate = useNavigate();
  // const handlelogout = () => {
  //   setAnchorEl(null);
  //   localStorage.clear();
  //   navigate("/login", { replace: true });
  //   window.location.reload();
  // };

  const [bgColour1, setBgColour1] = useState("");
  const [borderleft1, setborderleft1] = useState("");
  const appStyles1 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour1}`,
    
  };

  const [bgColour2, setBgColour2] = useState("");
  const [borderleft2, setborderleft2] = useState("");
  const appStyles2 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour2}`,
    borderLeft: `${borderleft2}`,
  };

  // const [bgColour3, setBgColour3] = useState("");
  // const [borderleft3, setborderleft3] = useState("");
  // const appStyles3 = {
  //   marginTop: "1em",
  //   height: "56px",
  //   width: "100%",
  //   background: `${bgColour3}`,
  //   borderLeft: `${borderleft3}`,
  // };

  const [bgColour4, setBgColour4] = useState("");
  const [borderleft4, setborderleft4] = useState("");
  const appStyles4 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour4}`,
    borderLeft: `${borderleft4}`,
  };

  const [bgColour5, setBgColour5] = useState("");
  const [borderleft5, setborderleft5] = useState("");
  const appStyles5 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour5}`,
    borderLeft: `${borderleft5}`,
  };
  const [bgColour6, setBgColour6] = useState("");
  const [borderleft6, setborderleft6] = useState("");
  const appStyles6 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour6}`,
    borderLeft: `${borderleft6}`,
  };
  const [bgColour7, setBgColour7] = useState("");
  const [borderleft7, setborderleft7] = useState("");
  const appStyles7 = {
    marginTop: "1em",
    height: "56px",
    width: "100%",
    background: `${bgColour7}`,
    borderLeft: `${borderleft7}`,
  };
  const [bgColour8, setBgColour8] = useState("");
  const [borderleft8, setborderleft8] = useState("");
  const appStyles8 = {
    marginTop: "3em",
    height: "56px",
    width: "100%",
    background: `${bgColour8}`,
   
  };


  return (
    <>
      
      <Box sx={{ background: "#0D47A1",minHeight:"100vh", height: "100%", paddingTop: "2em", color: "rgba(206, 212, 218, 1)",boxSizing:"border-box" }}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{
                  display: "flex",
                  paddingTop: "12px",
                 boxSizing:"border-box",
                  width: "100%",
                  height: "56px",
                  color: "rgba(206, 212, 218, 1)",
                  
                  textAlign:"center",
                  alignItems:"center",
                  justifyContent:"center"
                  
                }}
              >
                <span >
                  
                <img src={logo} alt="" style={{width:"100%"}}/>
                
                </span>
               
              </NavLink>
            </li>

            <li
              style={appStyles8}
              onMouseEnter={() => {
                setBgColour8("rgb(159, 162, 180,0.08)");
                
              }}
              onMouseLeave={() => {
                setBgColour8("");
                
              }}
            >
              <NavLink
                to="/panel/page1"
                style={({ isActive }) => {
                  return {
                    display: "flex",
                    paddingTop: "12px",
                    
                    width: "100%",
                    height: "45px",
                    color: "white",
                   
                    background: isActive ? "rgba(255, 255, 255, 0.2)" : "",
                   
                  };
                }}
              >
                <span style={{ marginRight: "0.7em" }}>
                  <AddBoxOutlinedIcon />{" "}
                </span>
                <Typography sx={{fontWeight:700,fontSize: "14px",marginRight:"1em"}}>تولید محتوا</Typography>
              </NavLink>
            </li>
            <li
              style={appStyles1}
              onMouseEnter={() => {
                setBgColour1("rgb(159, 162, 180,0.08)");
               
              }}
              onMouseLeave={() => {
                setBgColour1("");
               
              }}
            >
              <NavLink
                to="/panel/page2"
                style={({ isActive }) => {
                  return {
                    display: "flex",
                    paddingTop: "12px",
                    
                    width: "100%",
                    height: "45px",
                    color: "white",
                   
                    background: isActive ? "rgb(159, 162, 180,0.08)" : "",
                   
                  };
                }}
              >
                <span style={{ marginRight: "0.7em" }}>
                  <AccessTimeIcon />{" "}
                </span>
                <Typography sx={{fontWeight:700,fontSize: "14px",marginRight:"1em"}}>تاریخچه متن های من</Typography>
                
              </NavLink>
            </li>
            <li
              style={appStyles6}
              onMouseEnter={() => {
                setBgColour6("rgb(159, 162, 180,0.08)");
                
              }}
              onMouseLeave={() => {
                setBgColour6("");
               
              }}
            >
              <NavLink
                to="/panel/page3"
                style={({ isActive }) => {
                  return {
                    display: "flex",
                    paddingTop: "12px",
                    
                    width: "100%",
                    height: "45px",
                    color: "white",
                   
                    background: isActive ? "rgb(159, 162, 180,0.08)" : "",
                   
                  };
                }}
              >
                <span style={{ marginRight: "0.7em" }}>
                  <BookmarkBorderIcon />{" "}
                </span>
                <Typography sx={{fontWeight:700,fontSize: "14px",marginRight:"1em"}}> متن های ذخیره شده</Typography>
                
              </NavLink>
            </li>
            <Divider color="white" style={{ margin: "1em" }} />


            <li
              style={appStyles7}
              onMouseEnter={() => {
                setBgColour7("rgb(159, 162, 180,0.08)");
                
              }}
              onMouseLeave={() => {
                setBgColour7("");
                
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    display: "flex",
                    paddingTop: "12px",
                    
                    width: "100%",
                    height: "45px",
                    color: "white",
                   
                    background: isActive ? "rgb(159, 162, 180,0.08)" : "",
                   
                  };
                }}
              >
                <span style={{ marginRight: "0.7em" }}>
                  <HeadsetMicIcon />{" "}
                </span>
                <Typography sx={{fontWeight:700,fontSize: "14px",marginRight:"1em"}}>سوالات متدوال</Typography>
              </NavLink>
            </li>


            <li>
              <ListItemButton
                onClick={handleClick}
                sx={{ marginTop: "1em", marginBottom: "1em" }}
                style={appStyles2}
                onMouseEnter={() => {
                  setBgColour2("rgb(159, 162, 180,0.08)");
                  
                }}
                onMouseLeave={() => {
                  setBgColour2("");
                 
                }}
              >
                <ListItemIcon>
                  <PersonOutlineIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="حساب کاربری"  sx={{color: "white", marginRight: "0.7em"}}/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto">
                <List component="div" disablePadding sx={{ bgcolor: "rgba(196, 196, 196, 0.05)", margin: "1em", borderRadius: "1em" }}>
                  <NavLink
                    to={"./"}
                    sx={{ textDecoration: "none" }}
                    style={({ isActive }) => ({
                      color: "white",
                    })}
                  >
                    <ListItemButton
                      sx={{ pl: "10%" }}
                      style={appStyles4}
                      onMouseEnter={() => {
                        setBgColour4("rgb(159, 162, 180,0.08)");
                        
                      }}
                      onMouseLeave={() => {
                        setBgColour4("");
                        
                      }}
                    >
                      <ListItemIcon>
                        <ManageAccountsSharpIcon sx={{ color: "white", marginLeft: "0.7em" }} />
                      </ListItemIcon>
                      <ListItemText primary="اطلاعات کاربری" />
                    </ListItemButton>
                  </NavLink>

                  <NavLink
                    to={"/"}
                    sx={{ textDecoration: "none"}}
                    style={({ isActive }) => ({
                      color: "white",
                      background: isActive ? "rgb(159, 162, 180,0.08)" : "",
                      borderLeft: isActive ? "0.5px solid #45B5C6" : "",
                    })}
                  >
                    <ListItemButton
                      sx={{ pl: "10%" }}
                      style={appStyles5}
                      onMouseEnter={() => {
                        setBgColour5("rgb(159, 162, 180,0.08)");
                       
                      }}
                      onMouseLeave={() => {
                        setBgColour5("");
                        
                      }}
                    >
                      <ListItemIcon>
                        <LockOpenIcon sx={{ color: "rgba(206, 212, 218, 1)", marginLeft: "0.7em" }} />
                      </ListItemIcon>
                      <ListItemText primary="تغییر رمز عبور" sx={{fontSize:"14px",fontWeight:500}} />
                    </ListItemButton>
                  </NavLink>
                </List>
              </Collapse>
             
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
}
