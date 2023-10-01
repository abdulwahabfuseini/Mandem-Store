import { Box, Step, StepLabel, Stepper, Button } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import BillingForm from "./BillingForm";
import Confirmation from "./Confirmation";
import Payments from "./Payments";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  state: "",
  street1: "",
  city: "",
  zipCode: "",
};

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Field is required"),
  lastName: yup.string().required("Field is required"),
  email: yup
    .string()
    .email("Please Enter valid email")
    .required("Field is required"),
  phoneNumber: yup.string().required("Field is required"),
  country: yup.string().required("Field is required"),
  state: yup.string().required("Field is required"),
  street1: yup.string().required("Field is required"),

  city: yup.string().required("Field is required"),
  zipCode: yup.string().required("Field is required"),
});

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
    actions.setTouched({});
  };

  return (
    <div className="grid w-full px-2 mx-auto sm:max-w-6xl py-14">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }} className="w-full">
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmation</StepLabel>
        </Step>
      </Stepper>
      <div>
        <div>
          {isFirstStep && (
            <div className="grid w-full py-14">
              <Box className="w-full">
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={checkoutSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <BillingForm
                        type="initialValues"
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />

                      <Button
                        fullwidth
                        type="submit"
                        color="primary"
                        variant="contained"
                        sx={{
                          backgroundColor: "blue",
                          boxShadow: "none",
                          borderRadius: "4px",
                         
                        }}
                      >
                        Next
                      </Button>
                    </form>
                  )}
                </Formik>
              </Box>
            </div>
          )}
          {isSecondStep && <Payments />}
          {isThirdStep && <Confirmation />}
          {isSecondStep && (
            <Box display="flex" justifyContent="space-between" gap="50px">
              <Button
                htmlType="submit"
                fullwidth
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  boxShadow: "none",
                  borderRadius: "4px",
                }}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Back
              </Button>

              <Button
                fullwidth
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "blue",
                  boxShadow: "none",
                  borderRadius: "4px",
                }}
                onClick={() => setActiveStep(activeStep + 1)}
              >
                place an order
              </Button>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
