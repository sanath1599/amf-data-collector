import { React, useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Radio,
  Checkbox,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material/";
import { MENTOR_COACH } from "../../containers/Patient/constants";

export default function CandidatePerformanceMentoringForm({
  candidateDetails,
  formik,
  mentorType,
}) {
  return (
    <Grid container spacing={3} style={{ marginTop: "5px" }}>
      <Grid item xs={12}>
        <TextField
          id="name"
          required
          label="Student's name"
          fullWidth
          variant="standard"
          value={
            (candidateDetails && candidateDetails.name) || formik.values.name
          }
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="Student's ID"
          fullWidth
          variant="standard"
          value={(candidateDetails && candidateDetails.id) || formik.values.id}
          onChange={formik.handleChange}
          error={formik.touched.id && Boolean(formik.errors.id)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="Student's Category"
          fullWidth
          variant="standard"
          value={
            (candidateDetails && candidateDetails.category) ||
            formik.values.category
          }
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
        />
      </Grid>
      {mentorType === MENTOR_COACH && (
        <>
          <Grid item xs={12}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              inputFormat="dd/MM/yyyy"
              value={
                (candidateDetails && candidateDetails.coach.date) ||
                formik.values.coach.date
              }
              onChange={formik.handleChange}
              error={
                formik.touched.coach.date && Boolean(formik.errors.coach.date)
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
          </Grid>
          <Grid item xs={12}></Grid>
        </>
      )}
    </Grid>
  );
}
