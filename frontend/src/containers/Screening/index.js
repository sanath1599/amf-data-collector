import * as React from "react";
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
import CandidateDetailsForm from "../../components/ScreeningComponents/CandidateDetailsForm";

const theme = createTheme();

export default function Screening(operation) {
  console.log("operation = ", operation.operation);
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
          <Typography variant="h6" color="inherit" noWrap>
            AMF
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h6" variant="h5" align="center">
            {operation === "UPDATE" ? "Update Candidate" : "Add Candidate"}
          </Typography>
          <React.Fragment>
            <CandidateDetailsForm />
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
