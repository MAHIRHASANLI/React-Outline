import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';



const sssss = () => {
  return (
    <div className="magic-form">
    <Formik
      initialValues={{
        name: '',
        surname: '',
        salary: '',
        age: '',
        agree: false,
        position: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('İsim boş birakilamaz'),
        surname: Yup.string().min(6,"herf azdi").required('Email boş birakilamaz'),
        salary: Yup.number().required('salartim boş birakilamaz'),
        age: Yup.number().required('ageim boş birakilamaz'),
        agree: Yup.bool().oneOf([true], 'Koşullari kabul etmelisiniz'),
        position: Yup.string()
          .required('Hadi ama herkesin sevdiği bir renk vardir!')
          .oneOf(['developer', 'designer',  'supervisor', 'manager', 'engineer']),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleSubmit,
        handleReset,
        handleChange,
      }) => (
        <form className="magic-form" onSubmit={handleSubmit}>
          <h3>Add Employee</h3>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Mahir"
            className="input"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
////
          <label htmlFor="surname" className="topMargin">
            Surname
          </label>
          <input
            id="surname"
            type="text"
            placeholder="Hasanli"
            className="input"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && touched.surname && (
            <div className="input-feedback">{errors.surname}</div>
          )}
/////////
          <label htmlFor="salary" className="topMargin">
          Salary
          </label>
          <input
            id="salary"
            type="number"
            placeholder="Hasanli"
            className="input"
            value={values.salary}
            onChange={handleChange}
          />
          {errors.salary && touched.salary && (
            <div className="input-feedback">{errors.salary}</div>
          )}
          ///////////////
          <label htmlFor="age" className="topMargin">
          Age
          </label>
          <input
            id="age"
            type="number"
            placeholder="Hasanli"
            className="input"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && touched.age && (
            <div className="input-feedback">{errors.age}</div>
          )}
/////
          <label htmlFor="position" className="topMargin">
          Position         
           </label>
          <select
            id="position"
            value={values.position}
            onChange={handleChange}
            style={{
              marginTop: 10,
              width: '150px',
              padding: '10px 15px',
              outline: 'none',
            }}
          >
            <option value="" label="Position.." />
            <option value="developer" label="developer" />
            <option value="designer" label="designer" />
            <option value="supervisor" label="supervisor" />
            <option value="manager" label="manager" />
            <option value="engineer" label="engineer" />
          </select>

          {errors.position && touched.position && (
            <div className="input-feedback">{errors.position}</div>
          )}

          <div className="checkbox topMargin">
            <input
              id="agree"
              type="checkbox"
              value={values.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className="checkbox-label">
             Qebul ediyorum.
            </label>
          </div>
          {errors.agree && (
            <div className="input-feedback">{errors.agree}</div>
          )}

          <button type="submit" disabled={!dirty || isSubmitting}>
            ADD
          </button>
        </form>
      )}
    </Formik>
  </div>
  )
}

export default sssss;



  {/* <Divider style={{margin:"50px auto",color:"rgb(206,148,163)"}} orientation="center">Edit Employee</Divider>
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
      </Row> */}