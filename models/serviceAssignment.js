// models/serviceAssignment.js
const mongoose = require('mongoose');

const serviceAssignmentSchema = mongoose.Schema(
  {
    buildingEmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BuildingEmployee',
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceAssignment = mongoose.model('ServiceAssignment', serviceAssignmentSchema);

module.exports = ServiceAssignment;