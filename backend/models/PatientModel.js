var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PatientSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: String, required: false },
    gender: { type: String, required: false },
    age: { type: String, required: false },
    contactNumber: { type: String, required: false },
    nvsBranch: { type: String, required: false },
    typesOfDisabilities: Schema.Types.Mixed,
    disabilityPercentage: { type: String, required: false },
    eligibilityCriteria: Schema.Types.Mixed,
    medicalCondition: { type: String, required: false },
    medicalOrSurgicalHistory: { type: String, required: false },
    currentTreatmentAndMedication: { type: String, required: false },
    sportingHistory: { type: String, required: false },
    choiceOfSport: Schema.Types.Mixed,
    assistiveDevice: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    backScratchTest: { type: String, required: false },
    sitAndReach: { type: String, required: false },
    chestThrow: { type: String, required: false },
    plankTest: { type: String, required: false },
    broadJump: { type: String, required: false },
    pushUp: { type: String, required: false },
    balanceLeft: { type: String, required: false },
    balanceRight: { type: String, required: false },
    sprint: { type: String, required: false },
    category: { type: String, required: false },
    date: { type: Date, required: false },
    coach: {
      technicalSkill: { type: String, required: false },
      shortPut: { type: String, required: false },
      legPosition: {
        rt: { type: String, required: false },
        lt: { type: String, required: false }
      },
      foot: {
        rt: { type: String, required: false },
        lt: { type: String, required: false }
      },
      ankle: {
        rt: { type: String, required: false },
        lt: { type: String, required: false }
      },
      knee: {
        rt: { type: String, required: false },
        lt: { type: String, required: false }
      },
      hip: {
        rt: { type: String, required: false },
        lt: { type: String, required: false }
      },
      discusThrow : { type: String, required: false},
      footPosition : { type: String, required: false},
      trunkRotation : { type: String, required: false},
      upperbodyPosition : { type: String, required: false},
      fingerRelease : { type: String, required: false},
      javelinThrow : { type: String, required: false},
      runAway : { type: String, required: false},
      landingPosition : { type: String, required: false},
      throwingPosition : { type: String, required: false},
      upperbodyBendFromShoulder: { type: String, required: false },
      rightHandFourFingersTouchInNeckBelowEar: { type: String, required: false },
      trunkBendingPosition: { type: String, required: false },
      takeOffPositionFullBody: { type: String, required: false },
      rightShoulder: {
        rotation: { type: String, required: false },
        push: { type: String, required: false }
      },
      leftShoulder: {
        rotation: { type: String, required: false },
        push: { type: String, required: false }
      },
      trunk: {
        twist: { type: String, required: false },
        balance: { type: String, required: false }
      }
    },
    physioTherapist: {
      exercise: { type: String, required: false }
    },
    physicalEducators: {
      trainingUpdate: { type: String, required: false },
      distance: { type: String, required: false },
      trainingVideo: { type: String, required: false },
      strengthConditioningFeedback: { type: String, required: false },
      technicalSkillsFeedback: { type: String, required: false }
    }
  },
  { timestamps: false }
);

module.exports = mongoose.model("Patient", PatientSchema);