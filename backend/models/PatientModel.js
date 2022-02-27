var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PatientSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: String, required: false },
    gender: { type: String, required: false },
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
  },
  { timestamps: false }
);

module.exports = mongoose.model("Patient", PatientSchema);
