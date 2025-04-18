// models/buildingEmployee.js
const mongoose = require('mongoose');

const buildingEmployeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

const BuildingEmployee = mongoose.model('BuildingEmployee', buildingEmployeeSchema);

module.exports = BuildingEmployee;