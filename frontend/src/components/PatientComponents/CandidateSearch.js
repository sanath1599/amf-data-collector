import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { CANDIDATE_DETAILS_SCHEMA } from "../../schema/screeningSchema";

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
      onChange={(event, value, reason) =>
        reason !== "clear"
          ? setCurrentCandidate(value)
          : setCurrentCandidate(CANDIDATE_DETAILS_SCHEMA)
      }
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
    typesOfDisabilities: { intellectual: true },
    disabilityPercentage: "4.20",
    eligibilityCriteria: { ataxia: true },
    medicalCondition: "permanent",
    medicalOrSurgicalHistory: "None",
    currentTreatmentAndMedication: "None",
    sportingHistory: "None",
    choiceOfSport: { taekwondo: true },
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
    id: "axai",
    category: "Test",
    date: "28/05/1967",
    coach: {
      technicalSkill: "C",
      shortPut: "1",
      legPosition: {
        rt: "2",
        lt: "3",
      },
      foot: {
        rt: "4",
        lt: "5",
      },
      ankle: {
        rt: "6",
        lt: "7",
      },
      knee: {
        rt: "8",
        lt: "9",
      },
      hip: {
        rt: "1",
        lt: "2",
      },
      upperbodyBendFromShoulder: "3",
      rightHandFourFingersTouchInNeckBelowEar: "1",
      trunkBendingPosition: "4",
      takeOffPositionFullBody: "1",
      rightShoulder: {
        rotation: "5",
        push: "9",
      },
      leftShoulder: {
        rotation: "2",
        push: "6",
      },
      trunk: {
        twist: "5",
        balance: "3",
      },
    },
    physiotherapist: {
      exercise: "1",
    },
    physicalEducators: {
      trainingUpdate: "4",
      distance: "1",
      trainingVideo: "5",
      strengthConditioningFeedback: "9",
      technicalSkillsFeedback: "2",
    },
  },
];
