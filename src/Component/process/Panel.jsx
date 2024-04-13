import React from "react";
import {  Grid, Hidden } from "@mui/material";
import { Outlet } from "react-router-dom";

import Menu from "../menu/Menu";


export default function Panel() {
  return (
    <>
      <Grid container>
        <Grid item md={2} lg={2}>
        <Hidden only={["sm", "xs"]}>

          <Menu />
        </Hidden>
        </Grid>
        <Grid item md={10} lg={10} xs={12}>
         <Outlet/>
        </Grid>
      </Grid>
    </>
  );
}
