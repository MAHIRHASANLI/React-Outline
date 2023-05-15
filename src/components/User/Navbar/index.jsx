import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

import style from "./index.module.css"
// const [count] = useOutletContext()

const Navbar = ({count}) => {

  return (
    <AppBar className={style.Appbar} position="static">
      <Container maxWidth="xl">
        <Toolbar style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} disableGutters>
          <div style={{display:"flex",alignItems:"center",}}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          </div>

          <Box sx={{display: { xs: "none", sm: "block" } }}>
            <div>
              <Button variant="outlined">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="outlined">
                <Link to="/employees" >
                  Employees
                </Link>
              </Button>
              <Button variant="outlined">
                <Link to='/admin'>
                  Admin Panel
                </Link>
              </Button>
              <Button variant="outlined">
                <Link to="/favorites" >
                  Favorites
                </Link>  <span>{count.length}</span>
              </Button>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
