import React from "react";
import { Formik } from "formik";
import { RuxButton } from "astro-in-react";

const FormikForm = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // return alert(`Submitting: ${email}: ${pw}`);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = { email: "", password: "" };
          if (!values.email) {
            errors.email = "Required!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="formik-form">
            <h1>Formik Form</h1>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <RuxButton disabled={isSubmitting} onClick={handleSubmit}>
              Submit
            </RuxButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
