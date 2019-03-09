import React from 'react';
import { Formik, Form, Field } from 'formik';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import * as Yup from 'yup';

const ExampleForm = () => {
  const initialValues = {
    a: '',
    b: '',
    c: {
      d: '',
      e: ''
    }
  };

  const validationSchema = Yup.object().shape({
    a: Yup.string()
      .min(3)
      .required('Required'),
    b: Yup.string().min(10),
    c: Yup.object().shape({
      d: Yup.string()
        .max(3, 'too long')
        .required('Required'),
      e: Yup.string().required('Required')
    })
  });

  console.log(validationSchema);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {props => {
        const { isSubmitting } = props;
        return (
          <Form autoComplete="off" noValidate>
            <Field name="a" label="field a" />
            <Field name="b" label="field b" />
            <Field name="c.d" label="field c.d" />
            <Field name="c.e" label="field c.e" />
            <PrimaryButton
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              ok
            </PrimaryButton>
            <DisplayFormikState {...props} />
          </Form>
        );
      }}
    </Formik>
  );
};

const DisplayFormikState = props => (
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        padding: '.5rem'
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export default ExampleForm;
