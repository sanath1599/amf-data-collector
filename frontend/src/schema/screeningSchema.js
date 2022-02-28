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
  id: "",
  category: "",
  date: "",
  coach: {
    technicalSkill: "",
    shortPut: "",
    legPosition: {
      rt: "",
      lt: "",
    },
    foot: {
      rt: "",
      lt: "",
    },
    ankle: {
      rt: "",
      lt: "",
    },
    knee: {
      rt: "",
      lt: "",
    },
    hip: {
      rt: "",
      lt: "",
    },
    upperbodyBendFromShoulder: "",
    rightHandFourFingersTouchInNeckBelowEar: "",
    trunkBendingPosition: "",
    takeOffPositionFullBody: "",
    rightShoulder: {
      rotation: "",
      push: "",
    },
    leftShoulder: {
      rotation: "",
      push: "",
    },
    trunk: {
      twist: "",
      balance: "",
    },
  },
  physiotherapist: {
    exercise: "",
  },
  physicalEducators: {
    trainingUpdate: "",
    distance: "",
    trainingVideo: "",
    strengthConditioningFeedback: "",
    technicalSkillsFeedback: "",
  },
};
