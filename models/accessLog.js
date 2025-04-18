// models/accessLog.js
const mongoose = require('mongoose');

const accessLogSchema = mongoose.Schema(
  {
    companyEmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CompanyEmployee',
      required: true,
    },
    accessCardId: {
      type: String,
      required: true,
    },
    accessType: {
      type: String,
      enum: ['in', 'out'],
      required: true,
    },
    location: {
      type: String,
      enum: ['floor1', 'basementB1', 'basementB2'],
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AccessLog = mongoose.model('AccessLog', accessLogSchema);

module.exports = AccessLog;