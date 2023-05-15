import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPeopleByID } from "../../../api/requests";
import Style from "./index.module.css";
//Card//
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Toaster, toast } from "react-hot-toast";

const Employee = () => {
  const { id } = useParams();
  const [employee, setEmploye] = useState({});
  useEffect(() => {
    getPeopleByID(id).then((item) => {
      setEmploye(item);
    });
  }, [id]);
  const [count, setCount] = useOutletContext();
  return (
    <>
      <Card className={Style.Card} sx={{ maxWidth: 300 }}>
        <CardActions>
          <Link style={{ margin: "auto" }} to="/employees">
            <Button variant="contained" size="small">
              Learn More
            </Button>
          </Link>
        </CardActions>
        <Typography
          style={{ textAlign: "center", margin: "15px" }}
          variant="body2"
          color="text.secondary"
        >
          Detail Page of {employee.name} {employee.surname}
        </Typography>

        <CardMedia
          sx={{ height: 260 }}
          image={employee.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            <strong>
              Name: {employee.name} {employee.surname}
            </strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Position: {employee.position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary: {employee.salary}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ margin: "auto" }}
            variant="contained"
            size="small"
            onClick={() => {
              if (!localStorage.getItem("favorites")) {
                localStorage.setItem("favorites", JSON.stringify([]));
              } else {
                let previousfavorites = JSON.parse(
                  localStorage.getItem("favorites")
                );
                localStorage.setItem(
                  "favorites",
                  JSON.stringify([...previousfavorites, employee])
                );
              }
              setCount([...count, employee]);
              toast.success("Successfully toasted!");
            }}
          >
            <FavoriteIcon />
          </Button>
        </CardActions>
      </Card>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Employee;
