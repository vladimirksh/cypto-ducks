import React from "react";
import ReactDOM from 'react-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      pass: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values.lastName)
    },
  }
  );
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input id="firstName" type="text" {...formik.getFieldProps('firstName')} placeholder="You name" />
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="You last name"
      />
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <label htmlFor="email">Password</label>
      <br />
      <input
        id="pass"
        name="pass"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.pass}
        placeholder="Password"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>,
  document.getElementById('root')
);