// models/companyEmployee.js
const mongoose = require('mongoose');

const companyEmployeeSchema = mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    identityCard: {
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
    phoneNumber: {
      type: String,
      required: true,
    },
    accessCardId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Tạo unique compound index cho employeeId và companyId
companyEmployeeSchema.index({ employeeId: 1, companyId: 1 }, { unique: true });

const CompanyEmployee = mongoose.model('CompanyEmployee', companyEmployeeSchema);

module.exports = CompanyEmployee;