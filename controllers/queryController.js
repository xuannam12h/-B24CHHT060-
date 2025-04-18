const mongoose = require('mongoose');
const Company = require('../models/company');
const CompanyService = require('../models/companyService');
const CompanyEmployee = require('../models/companyEmployee');
const EmployeePosition = require('../models/employeePosition');
const Service = require('../models/service');
const ServiceAssignment = require('../models/serviceAssignment');
const AccessLog = require('../models/accessLog');
const BuildingEmployee = require('../models/buildingEmployee');

// Company Controller
const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().lean();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).lean();
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// CompanyService Controller
const createCompanyService = async (req, res) => {
  try {
    const companyService = new CompanyService(req.body);
    await companyService.save();
    res.status(201).json(companyService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyServices = async (req, res) => {
  try {
    const companyServices = await CompanyService.find().populate('companyId serviceId').lean();
    res.json(companyServices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyServiceById = async (req, res) => {
  try {
    const companyService = await CompanyService.findById(req.params.id).populate('companyId serviceId').lean();
    if (!companyService) return res.status(404).json({ message: 'CompanyService not found' });
    res.json(companyService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompanyService = async (req, res) => {
  try {
    const companyService = await CompanyService.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!companyService) return res.status(404).json({ message: 'CompanyService not found' });
    res.json(companyService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompanyService = async (req, res) => {
  try {
    const companyService = await CompanyService.findByIdAndDelete(req.params.id);
    if (!companyService) return res.status(404).json({ message: 'CompanyService not found' });
    res.json({ message: 'CompanyService deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// CompanyEmployee Controller
const createCompanyEmployee = async (req, res) => {
  try {
    const companyEmployee = new CompanyEmployee(req.body);
    await companyEmployee.save();
    res.status(201).json(companyEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyEmployees = async (req, res) => {
  try {
    const companyEmployees = await CompanyEmployee.find().populate('companyId').lean();
    res.json(companyEmployees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyEmployeeById = async (req, res) => {
  try {
    const companyEmployee = await CompanyEmployee.findById(req.params.id).populate('companyId').lean();
    if (!companyEmployee) return res.status(404).json({ message: 'CompanyEmployee not found' });
    res.json(companyEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompanyEmployee = async (req, res) => {
  try {
    const companyEmployee = await CompanyEmployee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!companyEmployee) return res.status(404).json({ message: 'CompanyEmployee not found' });
    res.json(companyEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompanyEmployee = async (req, res) => {
  try {
    const companyEmployee = await CompanyEmployee.findByIdAndDelete(req.params.id);
    if (!companyEmployee) return res.status(404).json({ message: 'CompanyEmployee not found' });
    res.json({ message: 'CompanyEmployee deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// EmployeePosition Controller
const createEmployeePosition = async (req, res) => {
  try {
    const employeePosition = new EmployeePosition(req.body);
    await employeePosition.save();
    res.status(201).json(employeePosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getEmployeePositions = async (req, res) => {
  try {
    const employeePositions = await EmployeePosition.find().populate('buildingEmployeeId serviceId').lean();
    res.json(employeePositions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getEmployeePositionById = async (req, res) => {
  try {
    const employeePosition = await EmployeePosition.findById(req.params.id).populate('buildingEmployeeId serviceId').lean();
    if (!employeePosition) return res.status(404).json({ message: 'EmployeePosition not found' });
    res.json(employeePosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployeePosition = async (req, res) => {
  try {
    const employeePosition = await EmployeePosition.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employeePosition) return res.status(404).json({ message: 'EmployeePosition not found' });
    res.json(employeePosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployeePosition = async (req, res) => {
  try {
    const employeePosition = await EmployeePosition.findByIdAndDelete(req.params.id);
    if (!employeePosition) return res.status(404).json({ message: 'EmployeePosition not found' });
    res.json({ message: 'EmployeePosition deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Service Controller
const createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find().lean();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).lean();
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// ServiceAssignment Controller
const createServiceAssignment = async (req, res) => {
  try {
    const serviceAssignment = new ServiceAssignment(req.body);
    await serviceAssignment.save();
    res.status(201).json(serviceAssignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getServiceAssignments = async (req, res) => {
  try {
    const serviceAssignments = await ServiceAssignment.find()
      .populate('buildingEmployeeId serviceId companyId')
      .lean();
    res.json(serviceAssignments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getServiceAssignmentById = async (req, res) => {
  try {
    const serviceAssignment = await ServiceAssignment.findById(req.params.id)
      .populate('buildingEmployeeId serviceId companyId')
      .lean();
    if (!serviceAssignment) return res.status(404).json({ message: 'ServiceAssignment not found' });
    res.json(serviceAssignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateServiceAssignment = async (req, res) => {
  try {
    const serviceAssignment = await ServiceAssignment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!serviceAssignment) return res.status(404).json({ message: 'ServiceAssignment not found' });
    res.json(serviceAssignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteServiceAssignment = async (req, res) => {
  try {
    const serviceAssignment = await ServiceAssignment.findByIdAndDelete(req.params.id);
    if (!serviceAssignment) return res.status(404).json({ message: 'ServiceAssignment not found' });
    res.json({ message: 'ServiceAssignment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// AccessLog Controller
const createAccessLog = async (req, res) => {
  try {
    const accessLog = new AccessLog(req.body);
    await accessLog.save();
    res.status(201).json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAccessLogs = async (req, res) => {
  try {
    const accessLogs = await AccessLog.find().populate('companyEmployeeId').lean();
    res.json(accessLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAccessLogById = async (req, res) => {
  try {
    const accessLog = await AccessLog.findById(req.params.id).populate('companyEmployeeId').lean();
    if (!accessLog) return res.status(404).json({ message: 'AccessLog not found' });
    res.json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateAccessLog = async (req, res) => {
  try {
    const accessLog = await AccessLog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!accessLog) return res.status(404).json({ message: 'AccessLog not found' });
    res.json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteAccessLog = async (req, res) => {
  try {
    const accessLog = await AccessLog.findByIdAndDelete(req.params.id);
    if (!accessLog) return res.status(404).json({ message: 'AccessLog not found' });
    res.json({ message: 'AccessLog deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// BuildingEmployee Controller
const createBuildingEmployee = async (req, res) => {
  try {
    const buildingEmployee = new BuildingEmployee(req.body);
    await buildingEmployee.save();
    res.status(201).json(buildingEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getBuildingEmployees = async (req, res) => {
  try {
    const buildingEmployees = await BuildingEmployee.find().lean();
    res.json(buildingEmployees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getBuildingEmployeeById = async (req, res) => {
  try {
    const buildingEmployee = await BuildingEmployee.findById(req.params.id).lean();
    if (!buildingEmployee) return res.status(404).json({ message: 'BuildingEmployee not found' });
    res.json(buildingEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateBuildingEmployee = async (req, res) => {
  try {
    const buildingEmployee = await BuildingEmployee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!buildingEmployee) return res.status(404).json({ message: 'BuildingEmployee not found' });
    res.json(buildingEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteBuildingEmployee = async (req, res) => {
  try {
    const buildingEmployee = await BuildingEmployee.findByIdAndDelete(req.params.id);
    if (!buildingEmployee) return res.status(404).json({ message: 'BuildingEmployee not found' });
    res.json({ message: 'BuildingEmployee deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
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
};