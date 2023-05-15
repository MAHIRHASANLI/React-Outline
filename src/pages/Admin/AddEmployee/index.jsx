import * as React from 'react';
import TextField from '@mui/material/TextField';
import {postPeople} from "../../../api/requests"
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Swal from 'sweetalert2'
import { Toaster, toast } from 'react-hot-toast';
import { Col, Divider, Row } from "antd";
const AddEmployee = () => {
  
  let [newEmployee, setNewEmployee] = React.useState({name:"",surname:"",salary:"",position:"",age:"", image:""})
  const navigate = useNavigate()
  async function handleClick(e){
    e.preventDefault();
    if(newEmployee.name.length<2 || newEmployee.surname.length<2 || newEmployee.salary.length<2 || newEmployee.position.length<2 || newEmployee.age.length<2 || newEmployee.image.length<2){
      toast.error("Inputlari doldurun!")
      }
      else{
        newEmployee.id = nanoid();
        await postPeople(newEmployee)
        setNewEmployee({name:"",surname:"",salary:"",position:"",age:"",image:""})
        navigate("/admin")
        let timerInterval
   Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
       
      }
      
    }
    function handleChange(e){
      setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
      console.log(e.target.value);
    }
  return (
<>
     <Divider style={{margin:"50px auto",color:"rgb(206,148,163)"}} orientation="center">Edit Employee</Divider>
      <Row  gutter={16}>
        <Col style={{display:"flex",margin:"0 auto"}} className="gutter-row"  span={23}>
    <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.name} name='name' onChange={(e)=>handleChange(e)} id="standard-basic" label="Name" variant="standard" />
     <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.surname} name='surname' onChange={(e)=>handleChange(e)} id="standard-basic" label="Surname" variant="standard" />
    <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.salary} name='salary' step="any" onChange={(e)=>handleChange(e)} id="standard-basic" label="Salary" variant="standard" />
    <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.position} name='position' onChange={(e)=>handleChange(e)} id="standard-basic" label="Position" variant="standard" />
    <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.age} name='age' onChange={(e)=>handleChange(e)} id="standard-basic" label="Age" variant="standard" />
    <TextField style={{ width: "200px", marginLeft: "50px" }} value={newEmployee.image} name='image' onChange={(e)=>handleChange(e)} id="standard-basic" label="Image" variant="standard" />
    </Col>
    <Button onClick={(e)=>handleClick(e)} style={{margin:"100px auto"}} >Add Employee</Button>
    </Row>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
</>
  )
}

export default AddEmployee