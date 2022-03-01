import React, { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import CandidateDetailsForm from "../../components/PatientComponents/CandidateDetailsForm";
import CandidateSearch from "../../components/PatientComponents/CandidateSearch";

const theme = createTheme();

export default function Patient(operation) {
  const [currentCandidate, setCurrentCandidate] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <img src="logo.jpg" height="150el"/>
          <Typography
            component="h6"
            variant="h5"
            align="center"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            {operation === "UPDATE" ? "Update Candidate" : "Add Candidate"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <CandidateSearch setCurrentCandidate={setCurrentCandidate} />
          <React.Fragment>
            <CandidateDetailsForm candidateDetails={currentCandidate} />
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
