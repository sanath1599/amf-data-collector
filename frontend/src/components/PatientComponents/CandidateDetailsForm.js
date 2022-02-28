import { React, Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import PatientService from "../../services/patient.service";
import { Button, Grid } from "@mui/material/";
import { CANDIDATE_DETAILS_SCHEMA } from "../../schema/screeningSchema";

import CandidateDetailsForm1 from "./CandidateDetailsForm1";
import CandidatePerformanceMentoringForm from "./CandidatePerformanceMentoringForm";
import {
  MENTOR_COACH,
  MENTOR_PE,
  MENTOR_PHYSIO,
} from "../../containers/Patient/constants";

export default function CandidateDetailsForm({ operation, candidateDetails }) {
  const steps = [
    "Candidate Details",
    "Coach remarks",
    "Physio remarks",
    "PE remarks",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  // Initialize Formik
  const formik = useFormik({
    initialValues: CANDIDATE_DETAILS_SCHEMA,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      if (isLastStep) {
        console.log(JSON.stringify(values, null, 2));
        PatientService.createPatient(values).then(
          (response) => {
            alert("Data Stored Succesfully!", JSON.stringify(response));
          },
          (error) => {
            alert("Error occured", JSON.stringify(error));
          }
        );
      } else setActiveStep(activeStep + 1);
    },
  });

  function renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CandidateDetailsForm1
            candidateDetails={candidateDetails}
            formik={formik}
          />
        );
      case 1:
        return (
          <CandidatePerformanceMentoringForm
            candidateDetails={candidateDetails}
            formik={formik}
            mentorType={MENTOR_COACH}
          />
        );
      case 2:
        return (
          <CandidatePerformanceMentoringForm
            candidateDetails={candidateDetails}
            formik={formik}
            mentorType={MENTOR_PHYSIO}
          />
        );
      case 3:
        return (
          <CandidatePerformanceMentoringForm
            candidateDetails={candidateDetails}
            formik={formik}
            mentorType={MENTOR_PE}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  useEffect(() => {
    if (candidateDetails && candidateDetails.typesOfDisabilities) {
      for (const [key, value] of Object.entries(
        candidateDetails.typesOfDisabilities
      )) {
        formik.setFieldValue("typesOfDisabilities", {
          ...formik.values.typesOfDisabilities,
          [key.toLowerCase()]: value,
        });
      }
    }
    if (candidateDetails && candidateDetails.eligibilityCriteria) {
      for (const [key, value] of Object.entries(
        candidateDetails.eligibilityCriteria
      )) {
        formik.setFieldValue("eligibilityCriteria", {
          ...formik.values.eligibilityCriteria,
          [key.toLowerCase()]: value,
        });
      }
    }
    if (candidateDetails && candidateDetails.choiceOfSport) {
      for (const [key, value] of Object.entries(
        candidateDetails.choiceOfSport
      )) {
        formik.setFieldValue("choiceOfSport", {
          ...formik.values.choiceOfSport,
          [key.toLowerCase()]: value,
        });
      }
    }
  }, [candidateDetails]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        {renderStepContent(activeStep)}
        <Grid container spacing={3} style={{ marginTop: "1px" }}>
          <Grid
            item
            xs
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {activeStep !== 0 && (
              <Button
                variant="contained"
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Back
              </Button>
            )}
          </Grid>
          <Grid item xs style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit">
              {operation === "UPDATE"
                ? isLastStep
                  ? "Update"
                  : "Next"
                : isLastStep
                ? "Save"
                : "Next"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}
