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
router.get('/patientProfile', (req, res) => {
  res.render('patientProfile');
});
router.get('/patientProfile/medicalHistory', (req, res) => {
  res.render('medicalHistory');
});

router.get('/requestApoointment', (req, res) => {
  res.render('notification');
});
router.get('/appointmentSchedule', (req, res) => {
  res.render('appointmentSchedule');
});
module.exports = router;
