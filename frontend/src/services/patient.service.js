import axios from "axios";
import authHeader from "./auth-header";
let ipAddress = window.location.href.split(':')[1]
const API_URL = `http:${ipAddress.slice(0,ipAddress.length-1)}:3005/api/patient/`;

class PatientService {
  getAllPatients() {
    return axios.get(API_URL, { headers: authHeader() });
  }
  getPatientById(patientId) {
    return axios.get(API_URL + patientId, { headers: authHeader() });
  }
  createPatient(patientData) {
    return axios.post(API_URL, patientData, { headers: authHeader() });
  }
  updatePatientById(patientId, updatedPatientData) {
    return axios.put(API_URL + patientId, updatedPatientData, {
      headers: authHeader(),
    });
  }
  deletePatientById(patientId) {
    return axios.delete(API_URL + patientId, { headers: authHeader() });
  }
}

export default new PatientService();
