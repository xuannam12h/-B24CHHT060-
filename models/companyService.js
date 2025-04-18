// models/companyService.js
const mongoose = require('mongoose');

const companyServiceSchema = mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    unitPrice: {
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

// Unique compound index
companyServiceSchema.index({ companyId: 1, serviceId: 1, startDate: 1 }, { unique: true });

const CompanyService = mongoose.model('CompanyService', companyServiceSchema);

module.exports = CompanyService;