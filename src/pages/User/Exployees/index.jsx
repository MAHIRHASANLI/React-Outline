import { getAllPeople } from "../../../api/requests";
import Style from "./index.module.css";
import { useEffect, useState } from "react";
//Card//
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
//Table//
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//Grid
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

import { Toaster} from "react-hot-toast";
import { useBasketContext } from "../../globalCompanent/BasketContext";
import Swal from "sweetalert2";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Exployees = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
  let [tramp, setTramp] = useState([]);
  let [filterTramp, setFilterTramp] = useState([]);
  useEffect(() => {
    getAllPeople().then((data) => {
      setTramp(data);
      setFilterTramp(data);
    });
  }, []);
  function handleSearch(e) {
    let filteredEmployes = filterTramp.filter((item) =>
      item.name
        .trim()
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase())
    );
    setTramp(filteredEmployes);
  }
  // const [count, setCount] = useOutletContext();
  const[favorites, setFavorites] = useBasketContext()
  return (
    <>
      <Box className={Style.grid} sx={{ flexGrow: 1 }}>
        <h2 className={Style.Appbar}>Employees</h2>
        <TextField
          className={Style.input}
          onChange={(e) => handleSearch(e)}
          id="standard-basic"
          label="Search Employee"
          variant="standard"
        />
        <Grid container spacing={2}>
          {tramp &&
            tramp.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Card
                      className={Style.Cart}
                      sx={{ border: "0", maxWidth: 345 }}
                    >
                      <CardMedia
                        sx={{ height: 140 }}
                        image={item.image}
                        title="green iguana"
                      />
                      <CardContent className="Style.Content">
                        <Typography
                          style={{ textAlign: "start" }}
                          className={Style.Name}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          <Link to={`${item.id}`}>
                            <strong>{item.name}</strong>{" "}
                            <strong>{item.surname}</strong>
                          </Link>
                        </Typography>
                        <Typography
                          style={{ textAlign: "start" }}
                          variant="body2"
                          color="text.secondary"
                        >
                          <span>Position:</span> <span>{item.position}</span>
                        </Typography>
                        <Typography
                          style={{ textAlign: "start" }}
                          variant="body2"
                          color="text.secondary"
                        >
                          <span>Salary:</span> <span>{item.salary}$</span>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={() => {
                            let previousfavorites = JSON.parse(localStorage.getItem("favorites"))
                            let Faindedirik = previousfavorites.find((data) => data.id === item.id)
                            if(Faindedirik){
                              Toast.fire({
                                icon: 'error',
                                title: 'Error' })
                            
                              
                            }
                            else{
                               
                              localStorage.setItem("favorites",JSON.stringify([...previousfavorites, item]));
                              Toast.fire({
                                icon: 'success',
                                title: 'Success'
                              })
                              setFavorites([...favorites, item ]);
                            }
                         
                            
                          }}
                          variant="contained"
                          size="small"
                        >
                          <FavoriteIcon />
                        </Button>
                      </CardActions>
                    </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Exployees;
