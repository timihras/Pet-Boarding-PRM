import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  DefaultButton,
  PrimaryButton
} from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { withAuthorization } from '../../../utils/Session';
import { H1 } from '../../../components/styles/headings';
import { Form } from '../../../components/styles/form';
import { GridDob } from '../../../components/styles/page';

const initialValues = {
  petName: '',
  petType: '',
  petBreed: '',
  petSize: 20,
  petGender: '',
  petDOB: {
    day: undefined,
    month: '',
    year: undefined
  },
  petNeutered: false,
  petAggresive: false,
  petNotes: ''
};
const today = new Date();
const validationSchema = Yup.object().shape({
  petName: Yup.string()
    .min(3)
    .required('Required'),
  petBreed: Yup.string()
    .min(3)
    .required('Required'),
  petDOB: Yup.object().shape({
    day: Yup.number()
      .min(1, 'Choose between 1 and 31')
      .max(31, 'Choose between 1 and 31')
      .transform((cv, ov) => {
        return ov === '' ? undefined : cv;
      }), // Check if the string is Empty
    year: Yup.number()
      .min(1900, 'Year does not exist')
      .max(today.getFullYear(), 'Year does not exist')
      .transform((cv, ov) => {
        return ov === '' ? undefined : cv;
      }) // Check if the string is Empty
  }),
  petNeutered: Yup.boolean(),
  petAggresive: Yup.boolean()
});

const AddNewPetPage = () => {
  return (
    <div>
      <H1>Add a new pet</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {props => {
          const {
            values,
            errors,
            dirty,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
            setFieldValue
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <TextField
                errorMessage={touched.petName ? errors.petName : ''}
                label="Pet Name"
                name="petName"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Type your pet name"
                type="text"
                value={values.petName}
              />
              <ChoiceGroup
                defaultSelectedKey={values.petType}
                label="Pet Type"
                name="petType"
                onBlur={handleBlur}
                onChange={handleChange}
                options={[
                  {
                    key: 'dog',
                    iconProps: { iconName: 'Cat' },
                    text: 'Dog',
                    value: 'dog'
                  },
                  {
                    key: 'cat',
                    iconProps: { iconName: 'Cat' },
                    text: 'Cat',
                    value: 'cat'
                  },
                  {
                    key: 'rodent',
                    iconProps: { iconName: 'Cat' },
                    text: 'Rodent',
                    value: 'rodent'
                  },
                  {
                    key: 'other',
                    iconProps: { iconName: 'Cat' },
                    text: 'Other',
                    value: 'other'
                  }
                ]}
              />
              <TextField
                errorMessage={touched.petBreed ? errors.petBreed : ''}
                label="Pet Breed"
                name="petBreed"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Type the breed of your pet"
                type="text"
                value={values.petBreed}
              />
              <Slider
                className="slider"
                label="Pet Size"
                name="petSize"
                min={1}
                max={100}
                step={1}
                defaultValue={values.petSize}
                valueFormat={value => `${value} kg`}
                showValue
                onChange={value => setFieldValue('petSize', value)}
                touch-action="none"
              />
              <GridDob>
                <TextField
                  errorMessage={
                    touched.petDOB && touched.petDOB.day && errors.petDOB
                      ? errors.petDOB.day
                      : ''
                  }
                  label="Day"
                  name="petDOB.day"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Day"
                  type="number"
                  value={values.petDOB.day}
                />
                <Dropdown
                  defaultSelectedKey={values.petDOB.month}
                  name="petDOB.month"
                  placeholder="Choose a Month"
                  label="Month"
                  ariaLabel="Choose a Month"
                  onBlur={handleBlur}
                  onChange={(e, item) =>
                    setFieldValue('petDOB.month', item.key)
                  }
                  options={[
                    { key: '1', text: 'January' },
                    { key: '2', text: 'February' },
                    { key: '3', text: 'March' },
                    { key: '4', text: 'April' },
                    { key: '5', text: 'May' },
                    { key: '6', text: 'June' },
                    { key: '7', text: 'July' },
                    { key: '8', text: 'August' },
                    { key: '9', text: 'September' },
                    { key: '10', text: 'October' },
                    { key: '11', text: 'November' },
                    { key: '12', text: 'December' }
                  ]}
                />
                <TextField
                  errorMessage={
                    touched.petDOB && touched.petDOB.year && errors.petDOB
                      ? errors.petDOB.year
                      : ''
                  }
                  label="Year"
                  name="petDOB.year"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Year"
                  type="number"
                  value={values.petDOB.year}
                />
              </GridDob>
              <ChoiceGroup
                defaultSelectedKey={values.petGender}
                label="Pet Gender"
                name="petGender"
                onBlur={handleBlur}
                onChange={handleChange}
                options={[
                  {
                    key: 'male',
                    text: 'Male',
                    iconProps: { iconName: 'Cat' },
                    value: 'male'
                  },
                  {
                    key: 'female',
                    text: 'Female',
                    iconProps: { iconName: 'Cat' },
                    value: 'female'
                  }
                ]}
              />
              <Toggle
                defaultChecked={values.petNeutered}
                name="petNeutered"
                label="Is your pet neutered?"
                inlineLabel
                onText="Yes"
                offText="No"
                onBlur={handleBlur}
                onChange={(e, checked) => setFieldValue('petNeutered', checked)}
              />
              <Toggle
                defaultChecked={values.petAggresive}
                name="petAggresive"
                label="Is your pet Aggresive?"
                inlineLabel
                onText="Yes"
                offText="No"
                onBlur={handleBlur}
                onChange={(e, checked) =>
                  setFieldValue('petAggresive', checked)
                }
              />
              <TextField
                errorMessage={touched.petNotes ? errors.petNotes : ''}
                name="petNotes"
                label="Notes"
                multiline={values.petNotes.length > 50}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Type anything important about your pet"
                value={values.petNotes}
              />
              <DefaultButton
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </DefaultButton>
              <PrimaryButton type="submit" disabled={isSubmitting}>
                Submit
              </PrimaryButton>

              {/* <DisplayFormikState {...props} /> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AddNewPetPage);
