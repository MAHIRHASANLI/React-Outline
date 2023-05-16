import * as React from 'react';
import {postPeople} from "../../../api/requests"
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Toaster} from 'react-hot-toast';

///

import { Formik } from 'formik';
import * as Yup from 'yup';

const AddEmployee = () => {
  const navigate = useNavigate()

  return (
<>
<div className="magic-form">
    <Formik
      initialValues={{
        name: '',
        surname: '',
        image: '',
        salary: '',
        age: '',
        agree: false,
        position: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(5,'Minimum herf sayini kecmemisiz').required('Adi bos saxlamisiz'),
        surname: Yup.string().min(6,"Minimum herf sayini kecmemisiz").required('Soyadi bos saxlamisiz'),
        image: Yup.string().min(5,"Link tamamlanmiyib").required('Image bos saxlamisiz'),
        salary: Yup.number().integer().max(2500,'Developer bu qeder maas alar??').positive("Menfi maash olmur").required('Maash bos saxlamisiz'),
        age: Yup.number().integer().positive("Menfi yash olmur").required('Yash bos saxlamisiz'),
        agree: Yup.bool().oneOf([true], 'Risq edinde !'),
        position: Yup.string()
          .required('Olmadiki vezife secindee!')
          .oneOf(['developer', 'designer',  'supervisor', 'manager', 'engineer']),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setTimeout(() => {
          values.id = nanoid();
                   postPeople(values)
                   setSubmitting(false);
                   resetForm();
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
            placeholder="Name"
            className="input"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}

          <label htmlFor="surname" className="topMargin">
            Surname
          </label>
          <input
            id="surname"
            type="text"
            placeholder="Surname"
            className="input"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && touched.surname && (
            <div className="input-feedback">{errors.surname}</div>
          )}
           <label htmlFor="surname" className="topMargin">
            Image
          </label>
          <input
            id="image"
            type="text"
            placeholder="Image"
            className="input"
            value={values.image}
            onChange={handleChange}
          />
          {errors.image && touched.image && (
            <div className="input-feedback">{errors.image}</div>
          )}

          <label htmlFor="salary" className="topMargin">
          Salary
          </label>
          <input
            id="salary"
            type="number"
            placeholder="Salary"
            className="input"
            value={values.salary}
            onChange={handleChange}
          />
          {errors.salary && touched.salary && (
            <div className="input-feedback">{errors.salary}</div>
          )}
         
          <label htmlFor="age" className="topMargin">
          Age
          </label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            className="input"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && touched.age && (
            <div className="input-feedback">{errors.age}</div>
          )}

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
            Qebul edin
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
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
</>
  )
}

export default AddEmployee