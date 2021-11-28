import { React, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { REGISTER_SCHEMA } from "../../schema/identitySchema";
import AuthService from "../../services/auth.service";
import { validateRegister } from "../../helpers/identityHelpers";
const theme = createTheme();

export default function Register() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const formik = useFormik({
    initialValues: REGISTER_SCHEMA,
    validate: validateRegister,
    validateOnChange: false,
    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));
      AuthService.register(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      ).then(
        (response) => {
          setMessage(response);
          setLoading(false);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setLoading(false);
          setSuccessful(false);
        }
      );
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: "10px", marginBottom: "30px" }}
          >
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.firstName)}
                  helperText={
                    Boolean(formik.errors.firstName)
                      ? formik.errors.firstName
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.lastName)}
                  helperText={
                    Boolean(formik.errors.lastName)
                      ? formik.errors.lastName
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.email)}
                  helperText={
                    Boolean(formik.errors.email) ? formik.errors.email : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.password)}
                  helperText={
                    Boolean(formik.errors.password)
                      ? formik.errors.password
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="reEnterPassword"
                  label="Re-enter Password"
                  type="password"
                  id="reEnterPassword"
                  autoComplete="new-password"
                  value={formik.values.reEnterPassword}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.password)}
                  helperText={
                    Boolean(formik.errors.password)
                      ? formik.errors.password
                      : ""
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
