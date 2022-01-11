const Patient = require("../models/PatientModel");
const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Patient Schema
function PatientData(data) {
  this.id = data._id;
  this.name = data.name;
  this.grade = data.grade;
  this.gender = data.gender;
  this.contactNumber = data.contactNumber;
  this.nvsBranch = data.nvsBranch;
  this.typesOfDisabilities = data.typesOfDisabilities;
  this.disabilityPercentage = data.disabilityPercentage;
  this.eligibilityCriteria = data.eligibilityCriteria;
  this.medicalCondition = data.medicalCondition;
  this.medicalOrSurgicalHistory = data.medicalOrSurgicalHistory;
  this.currentTreatmentAndMedication = data.currentTreatmentAndMedication;
  this.sportingHistory = data.sportingHistory;
  this.choiceOfSport = data.choiceOfSport;
  this.assistiveDevice = data.assistiveDevice;
  this.height = data.height;
  this.weight = data.weight;
  this.backScratchTest = data.backScratchTest;
  this.sitAndReach = data.sitAndReach;
  this.chestThrow = data.chestThrow;
  this.plankTest = data.plankTest;
  this.broadJump = data.broadJump;
  this.pushUp = data.pushUp;
  this.balanceLeft = data.balanceLeft;
  this.balanceRight = data.balanceRight;
  this.sprint = data.sprint;
}

/**
 * Patient List.
 *
 * @returns {Object}
 */
exports.patientList = [
  auth,
  function (req, res) {
    try {
      Patient.find({}).then((patients) => {
        if (patients.length > 0) {
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            patients
          );
        } else {
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            []
          );
        }
      });
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Patient Detail.
 *
 * @param {string} id
 *
 * @returns {Object}
 */
exports.patientDetail = [
  auth,
  function (req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return apiResponse.successResponseWithData(res, "Operation success", {});
    }
    try {
      Patient.findOne({ id: req.params.id }).then((patient) => {
        if (patient !== null) {
          let patientData = new PatientData(patient);
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            patientData
          );
        } else {
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            {}
          );
        }
      });
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Patient store.
 *
 * @param {string}      title
 * @param {string}      description
 * @param {string}      isbn
 *
 * @returns {Object}
 */
exports.patientStore = [
  body("name", "Name must not be empty.").isLength({ min: 1 }).trim(),
  //sanitizeBody("*").escape(),
  (req, res) => {
    try {
      console.log(req.body)
      const errors = validationResult(req);
      var patient = new Patient({ ...req.body, id: between(111111, 999999) });

      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        //Save patient.
        patient.save(function (err) {
          if (err) {
            return apiResponse.ErrorResponse(res, err);
          }
          let patientData = new PatientData(patient);
          return apiResponse.successResponseWithData(
            res,
            "Patient add Success.",
            patientData
          );
        });
      }
    } catch (err) {
      //throw error in json response with status 500.
      console.log(err)
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Patient update.
 *
 * @param {string}      title
 * @param {string}      description
 * @param {string}      isbn
 *
 * @returns {Object}
 */
exports.patientUpdate = [
  auth,
  body("title", "Title must not be empty.").isLength({ min: 1 }).trim(),
  body("description", "Description must not be empty.")
    .isLength({ min: 1 })
    .trim(),
  body("isbn", "ISBN must not be empty")
    .isLength({ min: 1 })
    .trim()
    .custom((value, { req }) => {
      return Patient.findOne({
        isbn: value,
        user: req.user._id,
        _id: { $ne: req.params.id },
      }).then((patient) => {
        if (patient) {
          return Promise.reject("Patient already exist with this ISBN no.");
        }
      });
    }),
  sanitizeBody("*").escape(),
  (req, res) => {
    try {
      const errors = validationResult(req);
      var patient = new Patient(...req.body);

      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return apiResponse.validationErrorWithData(
            res,
            "Invalid Error.",
            "Invalid ID"
          );
        } else {
          Patient.findById(req.params.id, function (err, foundPatient) {
            if (foundPatient === null) {
              return apiResponse.notFoundResponse(
                res,
                "Patient not exists with this id"
              );
            } else {
              //Check authorized user
              if (foundPatient.user.toString() !== req.user._id) {
                return apiResponse.unauthorizedResponse(
                  res,
                  "You are not authorized to do this operation."
                );
              } else {
                //update patient.
                Patient.findByIdAndUpdate(
                  req.params.id,
                  patient,
                  {},
                  function (err) {
                    if (err) {
                      return apiResponse.ErrorResponse(res, err);
                    } else {
                      let patientData = new PatientData(patient);
                      return apiResponse.successResponseWithData(
                        res,
                        "Patient update Success.",
                        patientData
                      );
                    }
                  }
                );
              }
            }
          });
        }
      }
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Patient Delete.
 *
 * @param {string} id
 *
 * @returns {Object}
 */
exports.patientDelete = [
  auth,
  function (req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return apiResponse.validationErrorWithData(
        res,
        "Invalid Error.",
        "Invalid ID"
      );
    }
    try {
      Patient.findById(req.params.id, function (err, foundPatient) {
        if (foundPatient === null) {
          return apiResponse.notFoundResponse(
            res,
            "Patient not exists with this id"
          );
        } else {
          //Check authorized user
          if (foundPatient.user.toString() !== req.user._id) {
            return apiResponse.unauthorizedResponse(
              res,
              "You are not authorized to do this operation."
            );
          } else {
            //delete patient.
            Patient.findByIdAndRemove(req.params.id, function (err) {
              if (err) {
                return apiResponse.ErrorResponse(res, err);
              } else {
                return apiResponse.successResponse(
                  res,
                  "Patient delete Success."
                );
              }
            });
          }
        }
      });
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
