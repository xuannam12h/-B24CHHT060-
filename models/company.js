// models/company.js
const mongoose = require('mongoose');

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    taxCode: {
      type: String,
      required: true,
      unique: true,
    },
    capital: {
      type: Number,
      required: true,
    },
    businessField: {
      type: String,
      required: true,
    },
    employeeCount: {
      type: Number,
      required: true,
    },
    buildingAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    floorArea: {
      type: Number,
      required: true,
    },
    floorPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;