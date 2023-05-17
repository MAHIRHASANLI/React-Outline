import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../../../pages/globalCompanent/BasketContext";
// import {useBasketContext} from "../../../pages/globalCompanent"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  const[favorites, setFavorites] = useBasketContext()
  const navigate = useNavigate()
  return (
    <Box  sx={{flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item style={{margin:"0 auto"}} xs={5}>
          <Item  style={{fontSize:"13px", display:"flex","justifyContent":"space-evenly","alignItems":"center"}}>
            <div>
              <p>
                <HistoryIcon/>
              </p>
              <p style={{marginTop:"-20px"}}>Recents</p>
            </div>
            <div onClick={()=>{
              navigate("/favorites")
            }}>
              <p>
                <FavoriteIcon />
              </p>
              <p style={{marginTop:"-20px"}}><span>Favorites</span> <span style={{color:"rgb(175,128,151)"}}>{favorites.length}</span></p>
            </div>
            <div>
              <p>
                <FmdGoodIcon />
              </p>
              <p style={{marginTop:"-20px"}}>Neabry</p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
