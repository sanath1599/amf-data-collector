import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function CandidateSearch({ setCurrentCandidate }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...candidates]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      fullWidth
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={(event, value) => setCurrentCandidate(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Candidate"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// for testing
const candidates = [
  {
    name: "Akshay",
    grade: "6",
    age: "9",
    gender: "male",
    contactNumber: "6309616098",
    nvsBranch: "Rangareddy",
    typesOfDisabilities: ["intellectual"],
    disabilityPercentage: "4.20",
    eligibilityCriteria: ["ataxia"],
    medicalCondition: "permanent",
    medicalOrSurgicalHistory: "None",
    currentTreatmentAndMedication: "None",
    sportingHistory: "None",
    choiceOfSport: ["taekwondo"],
    assistiveDevice: "None",
    height: "183",
    weight: "69",
    backScratchTest: "1",
    sitAndReach: "2",
    chestThrow: "3",
    plankTest: "1",
    broadJump: "2",
    pushUp: "3",
    balanceLeft: "1",
    balanceRight: "2",
    sprint: "3",
  },
];
