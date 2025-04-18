// models/service.js
const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
  {
    serviceCode: {
      type: String,
      required: true,
      unique: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;