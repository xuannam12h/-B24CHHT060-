// utils/helpers.js
const moment = require('moment');

// Tính đơn giá dịch vụ theo số nhân viên và diện tích sàn
const calculateServicePrice = (basePrice, employeeCount, floorArea) => {
  let price = basePrice;
  
  // Tính thêm 5% cho mỗi 5 người trên 10 người
  if (employeeCount > 10) {
    const additionalEmployeeGroups = Math.floor((employeeCount - 10) / 5);
    price *= (1 + 0.05 * additionalEmployeeGroups);
  }
  
  // Tính thêm 5% cho mỗi 10m2 trên 100m2
  if (floorArea > 100) {
    const additionalAreaGroups = Math.floor((floorArea - 100) / 10);
    price *= (1 + 0.05 * additionalAreaGroups);
  }
  
  return price;
};

// Tính số tiền dịch vụ trong tháng tính đến thời điểm hiện tại
const calculateServiceFee = (unitPrice, startDate, endDate = null) => {
  const now = endDate || new Date();
  
  // Nếu startDate là trong tháng hiện tại
  const startOfMonth = moment().startOf('month').toDate();
  const endOfMonth = moment().endOf('month').toDate();
  
  let effectiveStartDate = startDate;
  if (moment(startDate).isBefore(startOfMonth)) {
    effectiveStartDate = startOfMonth;
  }
  
  // Tính số ngày đã sử dụng trong tháng
  const daysInMonth = moment(endOfMonth).diff(moment(startOfMonth), 'days') + 1;
  const daysUsed = moment(now).diff(moment(effectiveStartDate), 'days') + 1;
  
  // Tiền = Đơn giá * (Số ngày sử dụng / Tổng số ngày trong tháng)
  return unitPrice * (daysUsed / daysInMonth);
};

// Tính lương nhân viên toà nhà dựa trên doanh thu dịch vụ
const calculateEmployeeSalary = (salaryRate, serviceRevenue) => {
  return salaryRate * serviceRevenue;
};

module.exports = {
  calculateServicePrice,
  calculateServiceFee,
  calculateEmployeeSalary,
};