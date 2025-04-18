// models/employeePosition.js
const mongoose = require('mongoose');

const employeePositionSchema = mongoose.Schema(
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
    level: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salaryRate: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeePosition = mongoose.model('EmployeePosition', employeePositionSchema);

module.exports = EmployeePosition;