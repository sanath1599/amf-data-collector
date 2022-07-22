const UserModel = require("../models/UserModel");
const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
//helper file to prepare responses.
const apiResponse = require("../helpers/apiResponse");
const utility = require("../helpers/utility");
const jwt = require("jsonwebtoken");
const mailer = require("../helpers/mailer");
const { constants } = require("../helpers/constants");



/**
 * Verify Confirm otp.
 *
 * @param {string}      email
 * @param {string}      otp
 *
 * @returns {Object}
 */
exports.verifyConfirm = [
  body("email")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Email must be specified.")
    .isEmail()
    .withMessage("Email must be a valid email address."),
  body("otp").isLength({ min: 1 }).trim().withMessage("OTP must be specified."),
  sanitizeBody("email").escape(),
  sanitizeBody("otp").escape(),
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        var query = { email: req.body.email };
        UserModel.findOne(query).then((user) => {
          if (user) {
            //Check already confirm or not.
            if (!user.isConfirmed) {
              //Check account confirmation.
              if (user.confirmOTP == req.body.otp) {
                //Update user as confirmed
                UserModel.findOneAndUpdate(query, {
                  isConfirmed: 1,
                  confirmOTP: null,
                }).catch((err) => {
                  return apiResponse.ErrorResponse(res, err);
                });
                return apiResponse.successResponse(
                  res,
                  "Account confirmed success."
                );
              } else {
                return apiResponse.unauthorizedResponse(
                  res,
                  "Otp does not match"
                );
              }
            } else {
              return apiResponse.unauthorizedResponse(
                res,
                "Account already confirmed."
              );
            }
          } else {
            return apiResponse.unauthorizedResponse(
              res,
              "Specified email not found."
            );
          }
        });
      }
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Resend Confirm otp.
 *
 * @param {string}      email
 *
 * @returns {Object}
 */
exports.resendConfirmOtp = [
  body("email")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Email must be specified.")
    .isEmail()
    .withMessage("Email must be a valid email address."),
  sanitizeBody("email").escape(),
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        var query = { email: req.body.email };
        UserModel.findOne(query).then((user) => {
          if (user) {
            //Check already confirm or not.
            if (!user.isConfirmed) {
              // Generate otp
              let otp = utility.randomNumber(4);
              // Html email body
              let html =
                "<p>Please Confirm your Account.</p><p>OTP: " + otp + "</p>";
              // Send confirmation email
              mailer
                .send(
                  constants.confirmEmails.from,
                  req.body.email,
                  "Confirm Account",
                  html
                )
                .then(function () {
                  user.isConfirmed = 0;
                  user.confirmOTP = otp;
                  // Save user.
                  user.save(function (err) {
                    if (err) {
                      return apiResponse.ErrorResponse(res, err);
                    }
                    return apiResponse.successResponse(
                      res,
                      "Confirm otp sent."
                    );
                  });
                });
            } else {
              return apiResponse.unauthorizedResponse(
                res,
                "Account already confirmed."
              );
            }
          } else {
            return apiResponse.unauthorizedResponse(
              res,
              "Specified email not found."
            );
          }
        });
      }
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
