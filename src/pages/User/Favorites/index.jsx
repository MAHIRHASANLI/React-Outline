import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
const Favorites = () => {
  const [count, setCount] = useOutletContext();
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: "80vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>You Have {count.length} employees</h3>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => {
          if (localStorage.getItem("favorites")) {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                JSON.parse(localStorage.getItem("favorites"),
                localStorage.removeItem("favorites")
                );
                setCount("")
                navigate("/employees")
              }
            })
          }
        }}
      >
        CLEAR ALL?
      </Button>
    </div>
  );
};

export default Favorites;
