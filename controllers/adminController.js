const Company = require('../models/companyModel');
const catchAsync = require('../utils/catchAsync');


exports.createCompany = catchAsync(async(req, res, next)=>{

  const newCompany = await Company.create({
    name: req.body.name,
    // here just include the admin as the current user after authorization service comes online

  });

  res.status(201).send({
    message: "Company created Succesfully",
  })
});