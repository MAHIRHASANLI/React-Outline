import { Button, Modal } from "antd";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { getPeopleByID, putPeople } from "../../../api/requests";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Col, Divider, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const EditEmployee = () => {
  const { id } = useParams();
  const navigate=useNavigate()
let [employesPut, setEmployesPut] = useState({
  name:"",surname:"",salary:"",position:"",age:"",image:""
  });
  useEffect(() => {
    getPeopleByID(id).then((item) => {
        setEmployesPut(item);
    });
  }, [id]);
  
  async function handeClick(e) {
   e.preventDefault();
   await putPeople(id,employesPut);
  //  employesPut.id = nanoid();
    setEmployesPut({ name:"",surname:"",salary:"",position:"",age:"",image:""})
    navigate("/admin")
   }
  function handleChenge(e) {
      setEmployesPut({ ...employesPut, [e.target.name]: e.target.value });
    }
  return (
    <>
      <Divider style={{margin:"50px auto",color:"rgb(206,148,163)"}} orientation="center">Edit Employee</Divider>
      <Row  gutter={16}>
        <img style={{width:"150px",height:"150px",margin:"-20px auto 20px",borderRadius:"7px"}} src={employesPut.image} alt="" />
        <Col style={{display:"flex",margin:"0 auto"}} className="gutter-row"  span={23}>
          <TextField
            value={employesPut.name}
            name="name"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px" }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            value={employesPut.surname}
            name="surname"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px", marginLeft: "10px" }}
            id="standard-basic"
            label="Surname"
            variant="standard"
          />
          <TextField
            value={employesPut.position}
            name="position"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px", marginLeft: "10px" }}
            id="standard-basic"
            label="Position"
            variant="standard"
          />
          <TextField
            value={employesPut.salary}
            name="salary"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px", marginLeft: "10px" }}
            id="standard-basic"
            label="Salary"
            variant="standard"
          />
          <TextField
            value={employesPut.age}
            name="age"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px", marginLeft: "10px" }}
            id="standard-basic"
            label="Age"
            variant="standard"
          />
          <TextField
            value={employesPut.image}
            name="image"
            onChange={(e) => handleChenge(e)}
            style={{ width: "200px", marginLeft: "10px" }}
            id="standard-basic"
            label="Image"
            variant="standard"
          />
          
        </Col>
      <Button  style={{margin:"50px auto"}} danger onClick={(e) => handeClick(e)}>
            Put Employee
          </Button>
      </Row>
    </>
  );
};

export default EditEmployee;
