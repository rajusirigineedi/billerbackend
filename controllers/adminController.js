const Company = require('../models/companyModel');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');


exports.createCompany = catchAsync(async(req, res, next)=>{

  const newCompany = await Company.create({
    name: req.body.name,
    // here just include the admin as the current user after authorization service comes online

  });

  res.status(201).send({
    message: "Company created Succesfully",
  })
});

// Why admin need to create Staff ? They can create themselves right ? 
// Because they have login.


exports.viewStaff = catchAsync(async(req, res, next) => {
  // 1) show which companies should belongs to the requesting admin
  // 2) he selects under which company he want's to get all the staff members
  // 3) And then he calls this endpoint 
  const companyId = req.body.companyId;
  // 4) TODO: Is it required to check if this company really belongs to him again ?
  // const staff = await Staff.find({companyId....});
  res.status(201).send({
    message: "Staff who are belonging to the selected company",
  })
});

exports.createCustomer = catchAsync(async(req, res, next) => {
  // 1) get which companies should belongs to the requesting admin
  // 1.2) select under which company this customer member can go 
  // 2) Create a customer member and set him under the selected company
  res.status(201).send({
    message: "Customer created Succesfully and tagged to the company",
  })
});

// Create approvals list in company object ...... to approve staffs via admin