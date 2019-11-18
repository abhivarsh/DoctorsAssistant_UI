var express = require('express');
var router = express.Router();

//Doctors Profile
router.get('/doctorProfiles', (req, res) => {
  res.render('doctorProfiles');
});
router.get('/doctorProfile', (req, res) => {
  res.render('doctorProfile');
});
router.get('/doctorProfile/addEducation', (req, res) => {
  res.render('addEducation');
});
router.get('/doctorProfile/addExperience', (req, res) => {
  res.render('addExperience');
});
router.get('/doctorProfile/doctorsDashboard', (req, res) => {
  res.render('doctorsDashboard');
});
router.get('/doctorProfile/editDoctorsProfile', (req, res) => {
  res.render('editDoctorsProfile');
});

//Patients Profile
router.get('/patientsProfile/patientsDashboard', (req, res) => {
  res.render('patientsDashboard');
});
router.get('/patientsProfile/editPatientsProfile', (req, res) => {
  res.render('editPatientsProfile');
});
router.get('/patientProfile', (req, res) => {
  res.render('patientProfile');
});
module.exports = router;
