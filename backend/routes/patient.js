var express = require("express");
const PatientController = require("../controllers/PatientController");

var router = express.Router();

router.get("/", PatientController.patientList);
router.get("/:id", PatientController.patientDetail);
router.post("/", PatientController.patientStore);
router.put("/:id", PatientController.patientUpdate);
router.delete("/:id", PatientController.patientDelete);

module.exports = router;
