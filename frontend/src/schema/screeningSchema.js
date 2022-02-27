import {
  TYPES_OF_DISABILITIES,
  ELIGIBILITY_CRITERIA,
  CHOICE_OF_SPORT,
} from "../containers/Patient/constants";
export const CANDIDATE_DETAILS_SCHEMA = {
  name: "",
  grade: "",
  age: "",
  gender: "",
  contactNumber: "",
  nvsBranch: "",
  typesOfDisabilities: TYPES_OF_DISABILITIES.reduce(
    (object, key) => ({ ...object, [key.toLowerCase()]: false }),
    {}
  ),
  disabilityPercentage: "",
  eligibilityCriteria: ELIGIBILITY_CRITERIA.reduce(
    (object, key) => ({ ...object, [key.toLowerCase()]: false }),
    {}
  ),
  medicalCondition: "",
  medicalOrSurgicalHistory: "",
  currentTreatmentAndMedication: "",
  sportingHistory: "",
  choiceOfSport: CHOICE_OF_SPORT.reduce(
    (object, key) => ({ ...object, [key.toLowerCase()]: false }),
    {}
  ),
  assistiveDevice: "",
  height: "",
  weight: "",
  backScratchTest: "",
  sitAndReach: "",
  chestThrow: "",
  plankTest: "",
  broadJump: "",
  pushUp: "",
  balanceLeft: "",
  balanceRight: "",
  sprint: "",
};
