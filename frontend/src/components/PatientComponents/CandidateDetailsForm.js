import { React, Fragment } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Radio,
  Checkbox,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material/";
import MuiPhoneNumber from "material-ui-phone-number";
import { useFormik } from "formik";

import {
  GRADES,
  NVS_BRANCHES,
  GENDERS,
  TYPES_OF_DISABILITIES,
  ELIGIBILITY_CRITERIA,
  MEDICAL_CONDITIONS,
  CHOICE_OF_SPORT,
  SCRATCH_TEST_LEVELS,
} from "../../containers/Patient/constants";

import { CANDIDATE_DETAILS_SCHEMA } from "../../schema/screeningSchema";

export default function CandidateDetailsForm(operation, candidateDetails) {
  const formik = useFormik({
    initialValues: CANDIDATE_DETAILS_SCHEMA,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} style={{ marginTop: "5px" }}>
          <Grid item xs={12}>
            <TextField
              id="name"
              required
              label="Student's name"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              id="select"
              name="grade"
              fullWidth
              required
              label="Grade"
              value={formik.values.grade}
              onChange={formik.handleChange}
              error={formik.touched.grade && Boolean(formik.errors.grade)}
            >
              {GRADES.map((grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="select"
              name="age"
              type="number"
              required
              fullWidth
              label="Age"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
            />
          </Grid>
          <Grid item>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              {GENDERS.map((gender) => (
                <FormControlLabel
                  key={gender}
                  control={
                    <Radio
                      name="gender"
                      required={true}
                      value={gender.toLowerCase()}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    />
                  }
                  label={gender}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <MuiPhoneNumber
              name="contactNumber"
              label="Contact Number"
              required
              defaultCountry="in"
              placeholder=""
              disableDropdown
              disableCountryCode
              autoFormat={false}
              fullWidth
              value={formik.values.contactNumber}
              onChange={(e) => formik.setFieldValue("contactNumber", e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              id="select"
              name="nvsBranch"
              fullWidth
              label="NVS branch"
              required
              value={formik.values.nvsBranch}
              onChange={formik.handleChange}
              error={
                formik.touched.nvsBranch && Boolean(formik.errors.nvsBranch)
              }
            >
              {NVS_BRANCHES.map((branch) => (
                <MenuItem key={branch} value={branch}>
                  {branch}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <FormControl required component="fieldset" variant="standard">
              <FormLabel component="legend">Type Of Disability</FormLabel>
              <FormGroup>
                {TYPES_OF_DISABILITIES.map((typeOfDisability) => (
                  <FormControlLabel
                    key={typeOfDisability}
                    control={
                      <Checkbox
                        name="typeOfDisability"
                        value={typeOfDisability.toLowerCase()}
                        onChange={(e) => {
                          if (e.target.checked)
                            formik.setFieldValue("typesOfDisabilities", [
                              ...formik.values.typesOfDisabilities,
                              e.target.value,
                            ]);
                          else
                            formik.setFieldValue(
                              "typesOfDisabilities",
                              formik.values.typesOfDisabilities.filter(
                                (typeOfDisability) =>
                                  typeOfDisability.toLowerCase() !==
                                  e.target.value
                              )
                            );
                        }}
                      />
                    }
                    label={typeOfDisability}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="select"
              name="disabilityPercentage"
              type="number"
              fullWidth
              label="Disability Percentage"
              value={formik.values.disabilityPercentage}
              onChange={formik.handleChange}
              error={
                formik.touched.disabilityPercentage &&
                Boolean(formik.errors.disabilityPercentage)
              }
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <FormControl required>
              <FormLabel component="legend">Eligibility Criteria</FormLabel>
              <FormGroup>
                {ELIGIBILITY_CRITERIA.map((eligibilityCriterion) => (
                  <FormControlLabel
                    key={eligibilityCriterion}
                    control={
                      <Checkbox
                        name="eligibilityCriteria"
                        value={eligibilityCriterion.toLowerCase()}
                        onChange={(e) => {
                          if (e.target.checked)
                            formik.setFieldValue("eligibilityCriteria", [
                              ...formik.values.eligibilityCriteria,
                              e.target.value,
                            ]);
                          else
                            formik.setFieldValue(
                              "eligibilityCriteria",
                              formik.values.eligibilityCriteria.filter(
                                (eligibilityCriterion) =>
                                  eligibilityCriterion.toLowerCase() !==
                                  e.target.value
                              )
                            );
                        }}
                      />
                    }
                    label={eligibilityCriterion}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Medical Condition is</FormLabel>
            <RadioGroup
              aria-label="medicalCondition"
              name="row-radio-buttons-group"
            >
              {MEDICAL_CONDITIONS.map((medicalCondition) => (
                <FormControlLabel
                  key={medicalCondition}
                  control={
                    <Radio
                      name="medicalCondition"
                      value={medicalCondition.toLowerCase()}
                      onChange={formik.handleChange}
                    />
                  }
                  label={medicalCondition}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="medicalOrSurgicalHistory"
              label="Medical / Surgical history"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.medicalOrSurgicalHistory}
              onChange={formik.handleChange}
              error={
                formik.touched.medicalOrSurgicalHistory &&
                Boolean(formik.errors.medicalOrSurgicalHistory)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="currentTreatmentAndMedication"
              label="Current Treatment &#38; Medication?"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.currentTreatmentAndMedication}
              onChange={formik.handleChange}
              error={
                formik.touched.currentTreatmentAndMedication &&
                Boolean(formik.errors.currentTreatmentAndMedication)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="sportingHistory"
              label="Sporting History(Past / Present Sports)- Mention Duration in each"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.sportingHistory}
              onChange={formik.handleChange}
              error={
                formik.touched.sportingHistory &&
                Boolean(formik.errors.sportingHistory)
              }
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <FormLabel component="legend">Choice of sport</FormLabel>
            <FormGroup>
              {CHOICE_OF_SPORT.map((sport) => (
                <FormControlLabel
                  key={sport}
                  control={
                    <Checkbox
                      name="choiceOfSport"
                      value={sport.toLowerCase()}
                      onChange={(e) => {
                        if (e.target.checked)
                          formik.setFieldValue("choiceOfSport", [
                            ...formik.values.choiceOfSport,
                            e.target.value,
                          ]);
                        else
                          formik.setFieldValue(
                            "choiceOfSport",
                            formik.values.choiceOfSport.filter(
                              (choiceOfSport) =>
                                choiceOfSport.toLowerCase() !== e.target.value
                            )
                          );
                      }}
                    />
                  }
                  label={sport}
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="assistiveDevice"
              label="Assistive Device"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.assistiveDevice}
              onChange={formik.handleChange}
              error={
                formik.touched.assistiveDevice &&
                Boolean(formik.errors.assistiveDevice)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="height"
              label="Height"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="weight"
              label="Weight"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.weight}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend">Back Scratch test</FormLabel>
            <RadioGroup
              // row
              aria-label="backScratchTest"
              name="row-radio-buttons-group"
            >
              {SCRATCH_TEST_LEVELS.map((scratchTestLevel) => (
                <FormControlLabel
                  key={scratchTestLevel}
                  control={
                    <Radio
                      name="backScratchTest"
                      value={scratchTestLevel}
                      onChange={formik.handleChange}
                    />
                  }
                  label={scratchTestLevel}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend">Sit &#38; Reach</FormLabel>
            <RadioGroup
              // row
              aria-label="sitAndReach"
              name="row-radio-buttons-group"
            >
              {SCRATCH_TEST_LEVELS.map((scratchTestLevel) => (
                <FormControlLabel
                  key={scratchTestLevel}
                  control={
                    <Radio
                      name="sitAndReach"
                      value={scratchTestLevel}
                      onChange={formik.handleChange}
                    />
                  }
                  label={scratchTestLevel}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="chestThrow"
              label="Chest Throw"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.chestThrow}
              onChange={formik.handleChange}
              error={
                formik.touched.chestThrow && Boolean(formik.errors.chestThrow)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="plankTest"
              label="Plank Test"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.plankTest}
              onChange={formik.handleChange}
              error={
                formik.touched.plankTest && Boolean(formik.errors.plankTest)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="broadJump"
              label="Broad Jump"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.broadJump}
              onChange={formik.handleChange}
              error={
                formik.touched.broadJump && Boolean(formik.errors.broadJump)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="pushUp"
              label="Push Up"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.pushUp}
              onChange={formik.handleChange}
              error={formik.touched.pushUp && Boolean(formik.errors.pushUp)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="balanceLeft"
              label="Balance Left"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.balanceLeft}
              onChange={formik.handleChange}
              error={
                formik.touched.balanceLeft && Boolean(formik.errors.balanceLeft)
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="balanceRight"
              label="Balance Right"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.balanceRight}
              onChange={formik.handleChange}
              error={
                formik.touched.balanceRight &&
                Boolean(formik.errors.balanceRight)
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="sprint"
              label="Sprint"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.sprint}
              onChange={formik.handleChange}
              error={formik.touched.sprint && Boolean(formik.errors.sprint)}
            />
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={0}
            marginTop="30px"
          >
            <Button variant="contained" type="submit">
              {operation === "UPDATE" ? "Update" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}
