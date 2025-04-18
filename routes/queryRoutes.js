const express = require('express');
const router = express.Router();
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  createCompanyService,
  getCompanyServices,
  getCompanyServiceById,
  updateCompanyService,
  deleteCompanyService,
  createCompanyEmployee,
  getCompanyEmployees,
  getCompanyEmployeeById,
  updateCompanyEmployee,
  deleteCompanyEmployee,
  createEmployeePosition,
  getEmployeePositions,
  getEmployeePositionById,
  updateEmployeePosition,
  deleteEmployeePosition,
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  createServiceAssignment,
  getServiceAssignments,
  getServiceAssignmentById,
  updateServiceAssignment,
  deleteServiceAssignment,
  createAccessLog,
  getAccessLogs,
  getAccessLogById,
  updateAccessLog,
  deleteAccessLog,
  createBuildingEmployee,
  getBuildingEmployees,
  getBuildingEmployeeById,
  updateBuildingEmployee,
  deleteBuildingEmployee,
} = require('../controllers/apiController');

// Company Routes
router.post('/companies', createCompany);
router.get('/companies', getCompanies);
router.get('/companies/:id', getCompanyById);
router.put('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);

// CompanyService Routes
router.post('/company-services', createCompanyService);
router.get('/company-services', getCompanyServices);
router.get('/company-services/:id', getCompanyServiceById);
router.put('/company-services/:id', updateCompanyService);
router.delete('/company-services/:id', deleteCompanyService);

// CompanyEmployee Routes
router.post('/company-employees', createCompanyEmployee);
router.get('/company-employees', getCompanyEmployees);
router.get('/company-employees/:id', getCompanyEmployeeById);
router.put('/company-employees/:id', updateCompanyEmployee);
router.delete('/company-employees/:id', deleteCompanyEmployee);

// EmployeePosition Routes
router.post('/employee-positions', createEmployeePosition);
router.get('/employee-positions', getEmployeePositions);
router.get('/employee-positions/:id', getEmployeePositionById);
router.put('/employee-positions/:id', updateEmployeePosition);
router.delete('/employee-positions/:id', deleteEmployeePosition);

// Service Routes
router.post('/services', createService);
router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

// ServiceAssignment Routes
router.post('/service-assignments', createServiceAssignment);
router.get('/service-assignments', getServiceAssignments);
router.get('/service-assignments/:id', getServiceAssignmentById);
router.put('/service-assignments/:id', updateServiceAssignment);
router.delete('/service-assignments/:id', deleteServiceAssignment);

// AccessLog Routes
router.post('/access-logs', createAccessLog);
router.get('/access-logs', getAccessLogs);
router.get('/access-logs/:id', getAccessLogById);
router.put('/access-logs/:id', updateAccessLog);
router.delete('/access-logs/:id', deleteAccessLog);

// BuildingEmployee Routes
router.post('/building-employees', createBuildingEmployee);
router.get('/building-employees', getBuildingEmployees);
router.get('/building-employees/:id', getBuildingEmployeeById);
router.put('/building-employees/:id', updateBuildingEmployee);
router.delete('/building-employees/:id', deleteBuildingEmployee);

module.exports = router;