import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Fragment } from "react";
const Layout = (props) => {
  return <>
  <Fragment>
  <main>{props.children}</main>

  </Fragment>
    <CssBaseline />
    <Navbar />

    <Outlet />
  </>;
};

export default Layout;





