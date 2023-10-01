import { Box, Typography, useMediaQuery } from "@mui/material";
import { getIn } from "formik";
import React from "react";
import TextField from '@mui/material/TextField';

const BillingForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const formattedName = (field) => `${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box>
      <Typography sx={{ mb: "15px" }} fontSize="24px">
        Billing Datails
      </Typography>
      <Box
        display="grid"
        gap="15px"
        mb="15px"
        alignContent='center'
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4", } }}
      >
       <TextField
          fullWidth
          type="text"
          label="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.firstName}
          name={formattedName("firstName")}
          error={formattedError("firstName")}
          helperText={formattedHelper("firstName")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.lastName}
          name={formattedName("lastName")}
          error={formattedError("lastName")}
          helperText={formattedHelper("lastName")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.email}
          name={formattedName("email")}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="tel"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.phoneNumber}
          name={formattedName("phoneNumber")}
          error={formattedError("phoneNumber")}
          helperText={formattedHelper("phoneNumber")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="country"
          label="Country"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.country}
          name={formattedName("country")}
          error={formattedError("country")}
          helperText={formattedHelper("country")}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          type="text"
          label="State"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.state}
          name={formattedName("state")}
          error={formattedError("state")}
          helperText={formattedHelper("state")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="text"
          label="City"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.city}
          name={formattedName("city")}
          error={formattedError("city")}
          helperText={formattedHelper("city")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Street1"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.street1}
          name={formattedName("street1")}
          error={formattedError("street1")}
          helperText={formattedHelper("street1")}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          type="text"
          label="ZipCode"
          onBlur={handleBlur}
          onChange={handleChange}
          values={values.zipCode}
          name={formattedName("zipCode")}
          error={formattedError("zipCode")}
          helperText={formattedHelper("zipCode")}
          sx={{ gridColumn: "span 2" }}
        />
      </Box>
    </Box>
  );
};

export default BillingForm;
