const express = require("express");
const router = express.Router();

const Contributors = require("../models/contributors.model");
//*********************************
//Get all Contributors Present in the Database
//*********************************
router.get("/", async (req, res) => {
  const contributors = await Contributors.find().exec();
  return res.status(200).json({ success: true, data: contributors });
});

//*********************************
//Get a particular Contributor depend upon the Contributor ID
//*********************************
//Eg. http://localhost:2244/contributors/getContributorById?id=1123
router.get("/getContributorById", async (req, res) => {
  const contributor = await Contributors.findOne({ _id: req.query.id }).exec();

  if (contributor) {
    return res.status(200).json({ success: true, data: contributor });
  }

  return res.status(200).json({ success: false, data: contributor });
});

//*********************************
//Store a new Contributor data into the Database
//*********************************
router.post("/create", async (req, res) => {
  //Checks the Contributor is already present or not
  let contributor = await Contributors.findOne({
    contributorId: req.body.contributorId,
  }).exec();

  //If presents, return "not possible to create the contributor"
  if (contributor) {
    return res
      .status(400)
      .json({ success: false, error: "Contributor already exists" });
  }

  //If not then create new contributor and store into the database
  contributor = await Contributors.create(req.body);
  return res.status(201).json({ success: true, data: contributor });
});

module.exports = router;
